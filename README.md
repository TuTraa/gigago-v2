## Getting Started

```bash

"dev": "next dev"

<!-- Start the Next.js development server, allowing you to develop your application locally with features like hot reloading -->

"build": "next build",

<!-- Compiles the Next.js application for production, optimizing the output for performance -->

"start": "next start",

<!-- Starts the Next.js application in production mode after a succesful build -->

"lint": "next lint",

<!-- Runs the Next.js linter, which checks your code for potential errors or style issues based on your ESLint configuration -->

"prepare": "husky install",

<!-- Sets up Husky, a tool for managing  Git hooks, which allows you to run scripts at certain points in the Git workflow (like pre-commit or pre-push) -->

"check-type": "tsc --pretty --noEmit",

<!-- Runs the Typescript compiler to check for type errors  without generating output files (due to --noEmit) -->

"check-format": "prettier --check .",

<!-- Uses Prettier to check if your files are formatted according to its rules, reporting any formatting issues without fixing them -->

"check-lint": "eslint . --ext ts --ext tsx --ext js",

<!-- Runs ESLint on the current directory (.), checking for issues in Typescript and JavaScript files -->

"format": "prettier --write",

<!-- Formats your files according to Prettier rules and writes the changes back to the files -->

"test-all": "npm run check-format && npm run check-lint && npm run check-types && npm run build"

<!-- A composite script that runs several checks in sequence: checks for formartiting, linting, type correctness, and finally builds the project.  If any step fails, the subsequent steps will not run -->
```

## Package Explains:

ESLint is a tool for identifying and reporting on pattern found in ECMAScript/JavaScript code. Install ESLint and its necessary plugins:
Packages: [`npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks`]

HUSKY is a tool that allows you to easily add Git hooks to your project. Install Husky and lint-staged.
[`npm install --save-dev husky lint-staged`]

## HUSKY configurations

I have defined a single Git hook: pre-commit. This hook is set to run the lint-staged command before each commit. Here's a breakdown:

`pre-commit`: This is the name of the Git hook. It corresponds to the hook that runs just before a commit is made.
`lint-staged`: This is the command that will be executedd when the pre-commit hook is triggered. Lint-staged is a tool that runs linters (code style checkers, etc.) on files that are staged for the commit.

##

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

```
