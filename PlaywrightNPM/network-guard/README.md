# Network Guard

Reusable Playwright helper that watches page traffic and fails tests when blocked responses appear.

## What it catches

- `403`
- `404`
- any `5xx`
- failed requests

## Install

Copy the `network-guard/` folder into your Playwright project, or publish it as a private package and install it.

## Basic usage

```js
const { createNetworkGuard } = require('./network-guard');

test('example', async ({ page }) => {
  const guard = createNetworkGuard(page);

  try {
    await page.goto('https://example.com');
    await guard.assertClean('Example page returned blocked network responses');
  } finally {
    await guard.dispose();
  }
});
```

## With Playwright fixture

```js
const { test, expect } = require('@playwright/test');
const { createNetworkGuard } = require('./network-guard');

test('example', async ({ page }) => {
  const guard = createNetworkGuard(page, {
    ignoreUrlPatterns: [/analytics/, 'favicon.ico'],
  });

  try {
    await page.goto('/');
    await guard.assertClean();
  } finally {
    await guard.dispose();
  }
});
```

## Options

- `ignoreUrlPatterns`: array of strings or regular expressions to skip known endpoints
- `failFast`: set to `false` if you only want to collect and assert later
- `trackRequestFailed`: set to `false` to ignore network failures from request-level errors
- `shouldFailResponse(response)`: custom response rule if you want different status handling
- `logger`: custom logger with an `error()` method; defaults to `console`

## Console output

When a blocked response is detected, the guard prints a line like:

```text
[network-guard] 403 GET https://example.com/api
```

Request-level failures are printed too:

```text
[network-guard] FAILED POST https://example.com/api (net::ERR_ABORTED)
```

## Notes

- This checks network events emitted by Playwright, which correspond to the responses you see in the browser network tab.
- Keep `guard.dispose()` in a `finally` block.
