import type { UserConfig } from '@commitlint/types'
const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  // parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[(.*?)\] - (.*?):(.*),\s*jira_id:\s*#(\d+)/,
      headerCorrespondence: ['platform', 'type', 'subject', 'jira_id'],
    },
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // new feature
        'fix', // bug fix
        'docs', // documentation changes
        'style', // changes that do not affect the meaning of the code (white-space, formatting, etc.)
        'refactor', // code changes that neither fix a bug or add a feature
        'perf', // performance improvement
        'test', // adding missing tests or correcting existing tests
        'build', // changes that affect the build system or external dependencies (example scopes: npm)
        'ci', // changes to CI configuration files and scripts
        'chore', // other changes that don't modify src or test files
        'revert', // reverts a previous commit
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'setup', // project setup
        'config', // configuration files
        'deps', // dependency updates
        'feature', // feature-specific changes
        'bug', // bug fixes
        'docs', // documentation
        'style', // code style/formatting
        'refactor', // code refactoring
        'test', // tests
        'build', // build scripts or configuration
        'ci', // continuous integration
        'release', // release related changes
        'other', // other changes
      ],
    ],
  },
}
export default Configuration
