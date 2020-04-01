module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Octo UI',
      description: 'A simple vue, ui library'
    }
  },

  themeConfig: {
    repoLabel: 'Contribute!',
    repo: 'https://github.com/Neophen/octo-ui',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'dev',
    editLinkText: 'Help us improve this page!',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Components', link: '/components/' },
          { text: 'GitHub', link: 'https://github.com/Neophen/octo-ui' }
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: [
                'autocomplete',
                'button',
                'calendar',
                'card',
                'checkbox',
                'collapse',
                'datepicker',
                'dialog',
                'dropdown-menu',
                'field',
                'icon',
                'info',
                'input',
                'item-grid',
                'label-select',
                'loading',
                'menu-header',
                'menu-user',
                'menu',
                'modal-content',
                'modal',
                'radio',
                'search-input',
                'search-select',
                'select',
                'switch',
                'tabs',
                'tag',
                'tags',
                'typography',
                'user-avatar',
                'user-login-type',
              ]
            }
          ]
        }
      }
    }
  }
}