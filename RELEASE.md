# Release notes for comit.network

## Upgrade to a new docusaurus version

1. Pick a [released docusaurus version](https://github.com/facebook/docusaurus/releases) to upgrade to.
1. Update the docusaurus version in [package.json](https://github.com/comit-network/comit.network/blob/master/package.json):
    1. Update `@docusaurus/core`
    1. Update `@docusaurus/preset-classic`
1. Verify it's working properly with `yarn install && yarn run start` to see the generated site.
1. Create a PR and get it merged to master so that it triggers a Netlify deploy.
