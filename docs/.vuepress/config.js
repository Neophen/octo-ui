module.exports = {
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Octo UI',
      description: 'A simple vue, ui library'
    }
  },
  octoConfig: {
    nav: [
      { text: 'Home', icon: 'home', link: '/' },
      { text: 'Guide', icon: 'setup', link: '/guide' },
      { text: 'Components', icon: 'components', link: '/components' },
      { text: 'GitHub', icon: 'git', link: 'https://github.com/Neophen/octo-ui' }
    ],
    sidebar: [
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
      'flash',
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
          { text: 'Home', icon: 'home', link: '/' },
          { text: 'Guide', icon: 'setup', link: '/guide' },
          { text: 'Components', icon: 'components', link: '/components' },
          { text: 'GitHub', icon: 'git', link: 'https://github.com/Neophen/octo-ui' }
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
                'flash',
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