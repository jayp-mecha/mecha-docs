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
      '/hardware/comet-m-gen1': [
        {
          text: 'Hardware',
          items: [
            { 
              text: 'Mecha Comet-M',
              items: [
                { text: 'introduction', link: '/hardware/comet-m-gen1/Introduction' },
                { text: 'Specifications', link: '/hardware/comet-m-gen1/specifications' },
                { 
                  text: 'User Guide',
                  collapsed: true,
                  items: [
                    { text: 'Booting Up', link: '/hardware/comet-m-gen1/user-guide/booting-up' },
                    { text: 'Wireless Setup', link: '/hardware/comet-m-gen1/user-guide/wireless-setup' },
                    { text: 'Connect to SSH', link: '/hardware/comet-m-gen1/user-guide/connect-to-ssh' },
                    { text: 'Connect to VNC', link: '/hardware/comet-m-gen1/user-guide/connect-to-vnc' },
                    { text: 'Connect to Mecha', link: '/hardware/comet-m-gen1/user-guide/connect-to-mecha' },
                  ]
                },
                {
                  text: 'Installing Apps',
                  collapsed: true,
                  items: [
                    { text: 'APT Repository', link: '/hardware/comet-m-gen1/installing-apps/apt-debian-repository' },
                    { text: 'Flatpak Apps', link: '/hardware/comet-m-gen1/installing-apps/flatpak-apps' },
                    { text: 'Docker Images', link: '/hardware/comet-m-gen1/installing-apps/docker-images' },
                  ]
                },
                {
                  text: 'Peripherals',
                  collapsed: true,
                  items: [
                    { text: 'CPU', link: '/hardware/comet-m-gen1/peripherals/cpu' },
                    { text: 'Wireless', link: '/hardware/comet-m-gen1/peripherals/wireless' },
                    { text: 'Bluetooth', link: '/hardware/comet-m-gen1/peripherals/bluetooth' },
                    { text: 'Video', link: '/hardware/comet-m-gen1/peripherals/Video' },
                    { text: 'Audio', link: '/hardware/comet-m-gen1/peripherals/audio' },
                    { text: 'Camera', link: '/hardware/comet-m-gen1/peripherals/camera' },
                    { text: 'Motion', link: '/hardware/comet-m-gen1/peripherals/motion' },
                    { text: 'Display', link: '/hardware/comet-m-gen1/peripherals/display' },
                    { text: 'Trust', link: '/hardware/comet-m-gen1/peripherals/trust' },
                    { text: 'RTC', link: '/hardware/comet-m-gen1/peripherals/rtc' },
                    { text: 'ADC', link: '/hardware/comet-m-gen1/peripherals/adc' },
                    { text: 'LED', link: '/hardware/comet-m-gen1/peripherals/led' },
                    { text: 'GPIO', link: '/hardware/comet-m-gen1/peripherals/gpio' },
                  ]
                },
                { 
                  text: 'Benchmarks',
                  collapsed: true,
                  items: [
                    { text: 'CPU', link: '/hardware/comet-m-gen1/benchmarks/cpu' },
                    { text: 'Disk', link: '/hardware/comet-m-gen1/benchmarks/disk' },
                    { text: 'Wireless', link: '/hardware/comet-m-gen1/benchmarks/wireless' },
                    { text: 'Ethernet', link: '/hardware/comet-m-gen1/benchmarks/ethernet' },
                    { text: 'Crypto', link: '/hardware/comet-m-gen1/benchmarks/crypto' },
                    { text: 'Power', link: '/hardware/comet-m-gen1/benchmarks/power' },
                    { text: 'Temperature', link: '/hardware/comet-m-gen1/benchmarks/temperature' },
                  ]
                },
                { 
                  text: 'Developer Guide',
                  collapsed: true,
                  items: [
                    {
                      text: 'Working with Yocto',
                      collapsed: true,
                      items: [
                        { text: 'Setting up', link: '/hardware/comet-m-gen1/developer-guide/working-with-yocto/setting-up' },
                        { text: 'Build Images', link: '/hardware/comet-m-gen1/developer-guide/working-with-yocto/build-images' },
                        { text: 'Adding a layer', link: '/hardware/comet-m-gen1/developer-guide/working-with-yocto/adding-a-layer' },
                        { text: 'Managing recipes', link: '/hardware/comet-m-gen1/developer-guide/working-with-yocto/managing-recipes' },
                        { text: 'Using Extensible SDK', link: '/hardware/comet-m-gen1/developer-guide/working-with-yocto/using-esdk' },
                        { text: 'Creating images', link: '/hardware/comet-m-gen1/developer-guide/working-with-yocto/creating-images' },
                        { text: 'Customizing Kernel', link: '/hardware/comet-m-gen1/developer-guide/customizing-kernel' },
                        { text: 'Customizing Bootloader', link: '/hardware/comet-m-gen1/developer-guide/customizing-booatloader' },
                        { text: 'Building Device Tree', link: '/hardware/comet-m-gen1/developer-guide/building-device-tree' },
                        { text: 'Storage Strategy', link: '/hardware/comet-m-gen1/developer-guide/storage-strategy' },
                        { text: 'Testing with QEMU', link: '/hardware/comet-m-gen1/developer-guide/testing-with-qemu' },
                        { text: 'Building on CI / CD', link: '/hardware/comet-m-gen1/developer-guide/building-on-ci-cd' },
                      ]
                    },
                    { text: 'Flashing Images', link: '/hardware/comet-m-gen1/developer-guide/flashing-images' },
                    { text: 'Editing the Pinmux', link: '/hardware/comet-m-gen1/developer-guide/crypto-trust-zone' },
                    { text: 'Device Tree Overlay', link: '/hardware/comet-m-gen1/developer-guide/device-tree-overlay' },
                    { text: 'Crypto & Trustzone', link: '/hardware/comet-m-gen1/developer-guide/crypto-trust-zone' },
                    { text: 'Secure Boot', link: '/hardware/comet-m-gen1/developer-guide/secure-boot' },
                    { text: 'FUSE', link: '/hardware/comet-m-gen1/developer-guide/fuse' },
                    { text: 'OTA Updates', link: '/hardware/comet-m-gen1/developer-guide/ota-update' },
                    { text: 'Disk Encryption', link: '/hardware/comet-m-gen1/developer-guide/disk-encryption' },
                    { text: 'Security', link: '/hardware/comet-m-gen1/developer-guide/security' },
                    { text: 'Running on QEMU', link: '/hardware/comet-m-gen1/developer-guide/running-on-qemu' },
                    { text: 'Testing Tools', link: '/hardware/comet-m-gen1/developer-guide/testing-tools' },
                  ],
                },
                { 
                  text: 'Repair Guide',
                  collapsed: true,
                  items: [
                    { text: 'Tools required', link: '/hardware/comet-m-gen1/repair-guide/tools-required' },
                    { text: 'Disassembly', link: '/hardware/comet-m-gen1/repair-guide/disassembly' },
                    { text: 'Battery', link: '/hardware/comet-m-gen1/repair-guide/battery' },
                    { text: 'RTC Battery', link: '/hardware/comet-m-gen1/repair-guide/rtc-battery' },
                    { text: 'Display', link: '/hardware/comet-m-gen1/repair-guide/rtc-cell-replacement' },
                    { text: 'System Module', link: '/hardware/comet-m-gen1/repair-guide/system-module' },
                    { text: 'Base Board', link: '/hardware/comet-m-gen1/repair-guide/base-board' },
                  ]
                },
                {
                  text: 'Hardware Extensions',
                  collapsed: true,
                  items: [
                    { text: 'Overview', link: '/hardware/comet-m-gen1/hardware-extensions/overview' },
                    { text: 'Mikroebus Clicks', link: '/hardware/comet-m-gen1/hardware-extensions/mikroebus-clicks' },
                    { text: 'Design extension', link: '/hardware/comet-m-gen1/hardware-extensions/design-extension' },
                  ]
                },
                { text: 'Troubleshooting', link: '/hardware/comet-m-gen1/troubleshooting' },
                { text: 'Safety Instructions', link: '/hardware/comet-m-gen1/safety-instructions' },
                { text: 'OS Images', link: '/hardware/comet-m-gen1/operating-system' },
                { text: 'Downloads', link: '/hardware/comet-m-gen1/downloads' },
                {
                  text: 'Tutorials',
                  collapsed: true,
                  items: [],
                },
              ]
            }
          ]
        },
        { text: 'Developer CLI', link: '/developer-cli/' },
        { text: 'Building Apps', link: '/building-apps/' },
      ],
      '/': [],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mecha-org' }
    ]
  }
})
