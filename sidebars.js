const sdkSidebar = require('./sdkSidebar.json')

/**
 * Sidebar configuration.
 */

module.exports = {
  main: {
    'Getting Started': ['getting-started/create-comit-app'],
    'COMIT Protocol': ['comit-protocol/comit-protocol-stack'],
    'Core Concepts': ['core-concepts/atomic-swap-htlc', 'core-concepts/instant-swap', 'core-concepts/privacy-preserving-swap', 'core-concepts/negotiation'],
    'Tutorials': [],
    'COMIT Javascript SDK': sdkSidebar,
  },
};

