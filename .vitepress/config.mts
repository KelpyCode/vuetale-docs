import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vuetale',
  description: 'Build Hytale UIs with Vue 3 and Kotlin/Java',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/docs/getting-started' },
      { text: 'API', link: '/docs/api/kotlin' },
      { text: 'CLI', link: '/docs/cli/companion-cli' },
      { text: 'Starter Walkthrough', link: '/docs/guide/starter-walkthrough' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/docs/getting-started' },
          { text: 'Project Structure', link: '/docs/guide/project-structure' },
          { text: 'Using Vuetale', link: '/docs/guide/using-vuetale' },
          { text: 'Starter Walkthrough', link: '/docs/guide/starter-walkthrough' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Kotlin API', link: '/docs/api/kotlin' },
          { text: 'Vue API', link: '/docs/api/vue' },
          { text: 'Companion CLI', link: '/docs/cli/companion-cli' },
          { text: 'Troubleshooting', link: '/docs/troubleshooting' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KelpyCode/Vuetale' }
    ]
  }
})
