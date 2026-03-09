# Playwright Framework Structure

## 📂 Project Structure

```bash
📂 pages/                        # Page Object Model classes
├── 📂 A/                        
│   └── 📄 APage.js
├── 📂 B/                        
│   └── 📄 BPage.js
├── 📂 C/                        
│   └── 📄 CPage.js
├── 📂 base/                     # Base page class
└── 📂 commonfunctions/          # Reusable utility methods

📂 tests/                        # Test cases
├── 📂 Atest/                    
│   └── 📄 APage.spec.js
├── 📂 Btest/                    
│   └── 📄 BPage.spec.js
├── 📂 Ctest/                    
│   └── 📄 CPage.spec.js
└── 📄 runner.spec.js            # Runner file to trigger multiple test suites

📂 .github/
└── 📂 workflows/
    └── 📄 main.yml              # GitHub Actions CI workflow

📄 package.json
📄 README.md

🚀 Features :

Playwright + JavaScript based end-to-end testing
Page Object Model for clean separation of pages and tests
Reusable components in base/ and commonfunctions/
Runner file to execute multiple test cases sequentially
GitHub Actions CI integration via main.yml
Easy scalability for adding new modules and test cases

🛠️ Installation
Initialize the repository:
create a folder and open gitbash 
git init or git init < Repo Link >

Clone the repository:
git clone < Repo Link >

Install playwright:
npm init playwright@latest

▶️ Running Tests

Run a specific test file:
npx playwright test tests/Atest/APage.spec.js

Run all tests:
npx playwright test

Run tests using the runner file:
npx playwright test runner.spec.js

Use Codegen for Auto Test Generation
npx playwright codegen

⚙️ GitHub Actions CI

This framework is integrated with GitHub Actions.
The workflow file main.yml is located in .github/workflows/.

It:
Installs dependencies
Runs Playwright tests
Generates reports
To trigger the workflow, click on run workflow in Actions.
main.yml can be customized for parallel runs, artifacts, or notifications.
sharding is implemented in workflow to execute tests on multiple jobs

# Github Pages Implementation
To deploy reports on github pages 
In yml file permissions--> contents --> as write
Go to Repo settings --> Actions --> General --> Allow all actions and reusable workflows
Scroll down to Workflow permissions --> Read and write permissions
Commit something and wait for the pages build and deployment to start
Once done check in Code if gh-pages is available apart from main branch
Go to settings --> Pages --> Source --> Brnach --> Select gh-pages instead of main and save
To share reports to mail or slack go to settings --> Secrets and Variables --> Actions --> new repository secret
To share reports on mail need to generate app password and add as a secret. Mail password will not work.
Reports can be shared to accounts which are added as a secret variable. Multiple mail id can be added as the reciever of the report but only one sender is allowed.







