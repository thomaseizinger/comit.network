module.exports = {
  title: 'COMIT Developer Hub',
  tagline: 'C( )MIT is an open protocol facilitating trustless cross-blockchain applications',
  url: 'https://comit-network.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'COMIT Developer Hub',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: 'docs/getting-started/doc1', label: 'Docs', position: 'left'},
        {
          href: 'https://github.com/comit-network',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          "items": [
            {
              "label": "Slack",
              "href": "https://coblox-comit.slack.com"
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Coblox`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
