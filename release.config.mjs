export default {
  branches: ['main'],
  extends: 'semantic-release-monorepo',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { breaking: true, release: 'major' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'docs', release: 'patch' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/exec',
      {
        // eslint-disable-next-line no-template-curly-in-string
        publishCmd: 'pnpm version ${nextRelease.version} --git-tag-version=false',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'apps/**/package.json'],
        // eslint-disable-next-line no-template-curly-in-string
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    '@semantic-release/github',
  ],
}
