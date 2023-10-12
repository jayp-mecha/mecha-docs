import { defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
  export default defineConfig({
  
  title: "Mecha Documentation",
  description: "Explore guides, tutorials and references to start building on Mecha platform",
  head:[
    ['link',
    { 
      href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&display=swap',
      rel: 'stylesheet' 
    }]
  
  ],
  themeConfig: {
    logo: {
      light:'/images/logo.svg',
      dark:'/images/logo-dark.svg',
      alt: 'Mecha'
      
    },
    siteTitle: 'Documentation',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Console', link: 'https://console.mecha.so/' },
      { text: 'Community', link: 'https://community.mecha.so/' }
    ],
    sidebar: {
      '/developer-cli': [
        {
          text: 'Developer CLI',
          items: [
            { text: 'Overview', link: '/developer-cli/' },
            { text: 'Installation', link: '/developer-cli/installation/index.md' },
            { text: 'Authentication', link: '/developer-cli/authentication/index.md' },
            { text: 'Arguments', link: '/developer-cli/authentication/arguments.md' },
            { text: 'Command Reference', items: [
              { text: 'auth', items: [
                { text: 'login', link: '/command-reference/auth/login.md' },
                { text: 'logout', link: '/command-reference/auth/whoami.md' },
                { text: 'whoami', link: '/command-reference/auth/whoami.md' },
              ] },
              { text: 'device', items: [
                { text: 'add', link: '/command-reference/device/add.md' },
                { text: 'list', link: '/command-reference/device/list.md' },
                { text: 'status', link: '/command-reference/device/status.md' },
                { text: 'update', link: '/command-reference/device/update.md' },
                { text: 'config', link: '/command-reference/device/config.md' },
                { text: 'ip', link: '/command-reference/device/ip.md' },
                { text: 'ssh', link: '/command-reference/device/ssh.md' },
                { text: 'scp', link: '/command-reference/device/scp.md' },
                { text: 'firewall', link: '/command-reference/device/firewall.md' },
                { text: 'flash', link: '/command-reference/device/flash.md' },
              ] },
              { text: 'network', items: [
                { text: 'up', link: '/command-reference/network/up.md' },
                { text: 'down', link: '/command-reference/network/down.md' },
                { text: 'reset', link: '/command-reference/network/reset.md' },
              ] },
              { text: 'help', link: '/command-reference/help.d' },
              { text: 'version', link: '/command-reference/version.md' },
              { text: 'update', link: '/command-reference/update.md' },
            ] },
            // { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      '/': [],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mecha-org' }
    ]
  }
})
