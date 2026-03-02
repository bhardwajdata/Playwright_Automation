# Use official Playwright image
FROM mcr.microsoft.com/playwright:v1.42.1-jammy

# Set working directory
WORKDIR /PLAYWRIGHTNPM

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Install Playwright browsers
RUN npx playwright install --with-deps

# Run only runner.spec.js
CMD ["npx", "playwright", "test", "tests/runner.spec.js"]