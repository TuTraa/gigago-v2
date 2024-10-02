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
  plugins: [
    {
      rules: {
        'header-match-team-pattern': (parsed) => {
          const { platform, type, subject, jira_id } = parsed
          if (
            platform === null &&
            type === null &&
            subject === null &&
            jira_id === null
          ) {
            return [
              false,
              "\x1b[31mERROR\x1b[0m: Please follow the format '[cloud] - [chore] subject, rm_id:#RM_ID'",
            ]
          }
          return [true, '']
        },
        'gitmoji-type-enum': (parsed, _when, expectedValue) => {
          const platformType = ['Cloud', 'Development', 'QA'] //change your platforms here
          const { type, platform } = parsed
          if (type && !expectedValue.includes(type)) {
            return [
              false,
              `\x1b[31mERROR\x1b[0m: [${type}] doesn't include in [${expectedValue}]`,
            ]
          }
          if (platform && !platformType.includes(platform)) {
            return [
              false,
              `\x1b[31mERROR\x1b[0m: [${platform}] doesn't include in [${platformType}]`,
            ]
          }
          return [true, '']
        },
      },
    },
  ],
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
