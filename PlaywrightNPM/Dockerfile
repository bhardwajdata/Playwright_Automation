# Use official Playwright image
FROM mcr.microsoft.com/playwright:v1.59.1-jammy

# Set working directory
WORKDIR /PLAYWRIGHTNPM

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy all project files
COPY . .

# Install Playwright browsers
RUN npx playwright install chromium

# Run only runner.spec.js
CMD ["npx", "playwright", "test", "--grep", "@docker"]