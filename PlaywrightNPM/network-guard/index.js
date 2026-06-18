function createNetworkGuard(page, options = {}) {
  const ignoreUrlPatterns = options.ignoreUrlPatterns || [];
  const logger = options.logger || console;
  const shouldFailResponse =
    options.shouldFailResponse ||
    ((response) => {
      const status = response.status();
      return status === 403 || status === 404 || (status >= 500 && status <= 599);
    });

  const failFast = options.failFast !== false;
  const trackRequestFailed = options.trackRequestFailed !== false;
  const failures = [];
  let fatalError = null;

  const formatFailure = (entry) =>
    entry.type === 'requestfailed'
      ? `FAILED ${entry.method} ${entry.url} (${entry.errorText})`
      : `${entry.status} ${entry.method} ${entry.url}`;

  const shouldIgnore = (url) =>
    ignoreUrlPatterns.some((pattern) => {
      if (pattern instanceof RegExp) {
        return pattern.test(url);
      }

      return String(url).includes(String(pattern));
    });

  const throwIfNeeded = (entry) => {
    if (!failFast || fatalError) {
      return;
    }

    fatalError = new Error(
      `Network guard detected a blocked response: ${entry.type === 'requestfailed' ? `FAILED ${entry.method} ${entry.url} (${entry.errorText})` : `${entry.status} ${entry.method} ${entry.url}`}`
    );

    queueMicrotask(() => {
      throw fatalError;
    });
  };

  const recordFailure = (entry) => {
    failures.push(entry);
    logger.error(`[network-guard] ${formatFailure(entry)}`);
    throwIfNeeded(entry);
  };

  const onResponse = (response) => {
    const url = response.url();

    if (shouldIgnore(url)) {
      return;
    }

    if (shouldFailResponse(response)) {
      recordFailure({
        type: 'response',
        status: response.status(),
        method: response.request().method(),
        url,
      });
    }
  };

  const onRequestFailed = (request) => {
    if (!trackRequestFailed) {
      return;
    }

    const url = request.url();

    if (shouldIgnore(url)) {
      return;
    }

    recordFailure({
      type: 'requestfailed',
      status: 'FAILED',
      method: request.method(),
      url,
      errorText: request.failure()?.errorText || 'Request failed',
    });
  };

  page.on('response', onResponse);
  page.on('requestfailed', onRequestFailed);

  async function assertClean(context = 'Network guard detected bad responses') {
    if (!failures.length) {
      return;
    }

    const details = failures
      .map((failure) => `- ${formatFailure(failure)}`)
      .join('\n');

    throw new Error(`${context}\n${details}`);
  }

  async function dispose() {
    page.off('response', onResponse);
    page.off('requestfailed', onRequestFailed);
  }

  return {
    assertClean,
    dispose,
    failures,
  };
}

async function safeGoto(page, networkGuard, url, options = {}, context) {
  await page.goto(url, options);
  await networkGuard.assertClean(context || `Blocked network responses found while loading ${url}`);
}

module.exports = {
  createNetworkGuard,
  safeGoto,
};
