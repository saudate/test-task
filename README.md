# Playwright Test Automation — Linqi

End-to-end test suite for the [Linqi](https://linqi.wecantest.it) web application, built with [Playwright](https://playwright.dev) and TypeScript.

## Stack

- **Playwright** — browser automation and test runner
- **TypeScript** — type-safe test code
- **Allure** — rich test reporting
- **ESLint + Prettier** — code quality and formatting
- **Husky + lint-staged** — pre-commit hooks

## Project Structure

```
├── pages/              # Page Object Model classes
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── DashboardEditorPage.ts
│   ├── ProcessesPage.ts
│   └── ProcessEditorPage.ts
├── tests/              # Test specs
│   ├── login.spec.ts
│   ├── dashboard.spec.ts
│   └── processes.spec.ts
├── fixtures/           # Custom Playwright fixtures
│   └── test.fixture.ts
├── utils/              # Shared helpers
│   └── helpers.ts
└── playwright.config.ts
```

## Setup

**1. Install dependencies**

```bash
npm install
```

**2. Install Playwright browsers**

```bash
npx playwright install
```

**3. Configure environment variables**

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

| Variable        | Description              |
|-----------------|--------------------------|
| `BASE_URL`      | Application base URL     |
| `USER_EMAIL`    | Login email              |
| `USER_PASSWORD` | Login password           |

## Running Tests

| Command                         | Description                              |
|---------------------------------|------------------------------------------|
| `npm test`                      | Run all tests (headless)                 |
| `npm run test:headed`           | Run all tests in headed mode             |
| `npm run test:login`            | Run login tests only                     |
| `npm run test:dashboard`        | Run dashboard tests only                 |
| `npm run test:processes`        | Run processes tests only                 |
| `npm run test:login:headed`     | Run login tests in headed mode           |
| `npm run test:dashboard:headed` | Run dashboard tests in headed mode       |
| `npm run test:processes:headed` | Run processes tests in headed mode       |

## Reports

**Playwright HTML report**

```bash
npm run report
```

**Allure report**

```bash
npm run allure:generate
npm run allure:open
```

## Code Quality

```bash
npm run lint          # Check for lint errors
npm run lint:fix      # Auto-fix lint errors
npm run format        # Format all files with Prettier
npm run format:check  # Check formatting without writing
```

Pre-commit hooks run `lint-staged` automatically on every commit via Husky.

## Test Coverage

| Spec                  | Tag          | What it covers                                         |
|-----------------------|--------------|--------------------------------------------------------|
| `login.spec.ts`       | `@login`     | Successful login and redirect to personal dashboard    |
| `dashboard.spec.ts`   | `@dashboard` | Create a dashboard and verify section layout options   |
| `processes.spec.ts`   | `@processes` | Create a process, add a Start element, save and verify |
