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
    }],
    ['link', { rel: "icon", type: "image/svg", href: "/icons/favicon.svg"}],
    
  
  ],
  themeConfig: {
    logo: {
      light:'/images/logo.svg',
      dark:'/images/logo-dark.svg',
      alt: 'Mecha'
      
    },
    siteTitle: false,
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
            { text: 'Authorization', link: '/developer-cli/authorization/index.md' },
            { text: 'Devices', link: '/developer-cli/managing-devices/index.md' },
            { text: 'Networking', link: '/developer-cli/setup-networking/index.md' },
            { text: 'Tutorials', link: '/developer-cli/ci-cd-integration/index.md' },
            { text: 'Commands', items: [
              { text: 'auth', items: [
                { text: 'login', link: '/developer-cli/commands/auth/login.md' },
                { text: 'logout', link: '/developer-cli/commands/auth/whoami.md' },
                { text: 'whoami', link: '/developer-cli/commands/auth/whoami.md' },
              ] },
              { text: 'device', items: [
                { text: 'add', link: '/developer-cli/commands/device/add.md' },
                { text: 'list', link: '/developer-cli/commands/device/list.md' },
                { text: 'status', link: '/developer-cli/commands/device/status.md' },
                { text: 'update', link: '/developer-cli/commands/device/update.md' },
                { text: 'config', link: '/developer-cli/commands/device/config.md' },
                { text: 'ip', link: '/developer-cli/commands/device/ip.md' },
                { text: 'ssh', link: '/developer-cli/commands/device/ssh.md' },
                { text: 'scp', link: '/developer-cli/commands/device/scp.md' },
                { text: 'firewall', link: '/developer-cli/commands/device/firewall.md' },
                { text: 'flash', link: '/developer-cli/commands/device/flash.md' },
              ] },
              { text: 'network', items: [
                { text: 'up', link: '/developer-cli/commands/network/up.md' },
                { text: 'down', link: '/developer-cli/commands/network/down.md' },
                { text: 'reset', link: '/developer-cli/commands/network/reset.md' },
              ] },
              { text: 'help', link: '/developer-cli/commands/help.d' },
              { text: 'version', link: '/developer-cli/commands/version.md' },
              { text: 'update', link: '/developer-cli/commands/update.md' },
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
