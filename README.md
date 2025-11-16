# 📘 Playwright Automation Framework (TypeScript)

A complete end-to-end UI automation framework built using **Playwright + TypeScript**, following modern automation standards and best practices.

## ✅ Features

- ✔ **Page Object Model (POM)**
- ✔ **Data-Driven Testing**
- ✔ **Cross Browser Execution**
- ✔ **Parallel Test Execution**
- ✔ **Screenshots & Videos on Failures**
- ✔ **JSON Test Data Support**
- ✔ **Playwright Test Runner Integration**

---

## 🚀 Project Structure

Playwright/
├── data/
│ └── users.json
├── pages/
│ ├── LoginPage.ts
│ └── DashboardPage.ts
├── tests/
│ ├── sample.spec.ts
│ ├── loginPOM.spec.ts
│ └── dataDrivenLogin.spec.ts
├── playwright.config.ts
├── tsconfig.json
└── README.md


---

## 🛠️ Installation & Setup

### **1. Clone the repository**
```sh
git clone <repo-url>
cd Playwright

2. Install dependencies

npm install

3. Install Playwright browsers

npx playwright install


3. Install Playwright browsers

npx playwright install


▶️ Running Tests
Run all tests
npx playwright test

Run a specific test
npx playwright test tests/loginPOM.spec.ts

Run in headed mode
npx playwright test --headed

Run with UI Mode
npx playwright test --ui

🌐 Cross Browser Testing

Browsers are configured in playwright.config.ts:

Chromium

Firefox

WebKit

Run all browser tests:
npx playwright test

⚡ Parallel Execution

Parallel mode is enabled by default.

Run with 4 workers:

npx playwright test --workers=4
📄 Page Object Model (POM)

Reusable page classes are stored inside the /pages folder:

LoginPage.ts → Login actions (navigate, login)

DashboardPage.ts → Dashboard validations, logout

Example usage in:

tests/loginPOM.spec.ts

🧪 Data-Driven Testing

Test data stored in:

data/users.json

Example:
[
  { "username": "tomsmith", "password": "SuperSecretPassword!", "valid": true },
  { "username": "invalidUser", "password": "wrong", "valid": false }
]


Data-driven test file:

tests/dataDrivenLogin.spec.ts


Run:

npx playwright test tests/dataDrivenLogin.spec.ts
