import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Swaraj-ing",
  description: "My personal site",
  head: [
    // favicon
    ['link', { rel: 'icon', href: '/favicon.ico' }],

    // simple analytics
    ['script', {
      async: '',
      src: 'https://scripts.simpleanalyticscdn.com/latest.js',
    }],
    ['script', {
      async: '',
      src: 'https://scripts.simpleanalyticscdn.com/auto-events.js',
    }],
  ],
  themeConfig: {
    logo: '/hero.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'What is this?', link: '/posts/what-is-this' },
      { text: 'About', link: '/about/about-me' }
    ],

    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'What is this?', link: '/posts/what-is-this' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About me', link: '/about/about-me' }
        ]
      }
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/swarajban' },
      { icon: 'x', link: 'https://x.com/swarajban' },
      { icon: 'github', link: 'https://github.com/swarajban' },
      { icon: 'soundcloud', link: 'https://soundcloud.com/swarajban' },
      { icon: 'mailgun', link: 'mailto:hello@swaraj.ing' }
    ],
  }
})
