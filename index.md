---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Mecha Documentation"
  text:
  tagline: We have compiled this developer reference documentation, from Cloud, Security, API- Everything and more!
  image:
    src: /images/hero-img.png
    alt: Mecha Documentation
---

<script setup>
import Footer  from './components/Footer.vue';
import FeaturesGroup  from './components/FeaturesGroup.vue';
const featuresGroups = [
  {
    title: "Mecha Comet-M",
    features: [
      {
        title: "Specs, Datasheet",
        details: "Find out how to get your device up and running with Mecha",
        link:"mecha-comet-m/specs",
        icon: {
          dark: "/icons/news.svg",
          light: "/icons/dark-news.svg"
        }
      },
      {
        title: "User Guide",
        details: "Get a quick overview and a jump-start on Mecha platform",
        link:"mecha-comet-m/user-guide",

        icon: {
          dark: "/icons/read.svg",
          light: "/icons/dark-read.svg"
        }
      },
      {
        title: "Developer Guide",
        link:"mecha-comet-m/developer-guide",

        details: "Find out how to get your device up and running with Mecha",
        icon: {
          dark: "/icons/built-on-mecha.svg",
          light: "/icons/dark-built-on-mecha.svg"
        }
      },
      {
        title: "Hardware Extensions",
        link:"mecha-comet-m/hardware-extensions",

        details: "Find out how to get your device up and running with Mecha",
        icon: {
          dark: "/icons/icon-frame.svg",
          light: "/icons/dark-icon-frame.svg"
        }
      },
      {
        title: "OS Images",
        link:"mecha-comet-m/os-image",
        details: "Find out how to get your device up and running with Mecha",
        icon: {
          dark: "/icons/display-driver.svg",
          light: "/icons/dark-display-driver.svg"
        }
      },
      {
        title: "Downloads",
        link:"mecha-comet-m/downloads",

        details: "Find out how to get your device up and running with Mecha",
        icon: {
          dark: "/icons/download.svg",
          light: "/icons/dark-download.svg"
        }
      }
    ]
  },
  {
    title: "Cloud Services",
    features: [
      {
        title: "Provisioning",
        link:"cloud-services/provisioning",
        details: "Setting up your device, zero-trust messaging",
        icon: {
          dark: "/icons/deploy.svg",
          light: "/icons/dark-deploy.svg"
        }
      },
      {
        title: "Networking",
        link:"cloud-services/networking",

        details: "Set up virtual overlay network for seamless access",
        icon: {
          dark: "/icons/work-flows.svg",
          light: "/icons/dark-work-flows.svg"
        }
      },
      {
        title: "Telemetry",
        link:"cloud-services/telemetry",
        
        details: "Collect Metrics, Traces and Logs (via OpenTelemetry)",
        icon: {
          dark: "/icons/square-status.svg",
          light: "/icons/dark-square-status.svg"
        }
      },
      {
        title: "Messaging",
        link:"cloud-services/messaging",

        details: "Send and receive messages securely to your devices",
        icon: {
          dark: "/icons/square-checkbox.svg",
          light: "/icons/dark-square-checkbox.svg"
        }
      }
    ]
  },
  {
    title: "Building Apps",
    features: [
      {
        title: "Device SDK",
        link:"building-apps/device-sdk",

        details: "Get a quick overview and a jump-start on Mecha platform",
        icon: {
          dark: "/icons/device-sdk.svg",
          light: "/icons/dark-device-sdk.svg"
        }
      },
      {
        title: "Launcher UI",
        link:"building-apps/launcher-ui",

        details: "Get a quick overview and a jump-start on Mecha platform",
        icon: {
          dark: "/icons/deploy.svg",
          light: "/icons/dark-deploy.svg"
        }
      },
      {
        title: "Docker",
        link:"building-apps/docker",

        details: "Get a quick overview and a jump-start on Mecha platform",
        icon: {
          dark: "/icons/docker-icon.svg",
          light: "/icons/dark-docker-icon.svg"
        }
      },
      {
        title: "Node JS",
        link:"building-apps/nodejs",

        details: "Tutorials and examples to build apps for Mecha devices",
        icon: {
          dark: "/icons/nodejs.svg",
          light: "/icons/dark-nodejs.svg"
        }
      },
      {
        title: "Python",
        link:"building-apps/python",

        details: "Tutorials and examples to build apps for Mecha devices",
        icon: {
          dark: "/icons/python.svg",
          light: "/icons/dark-python.svg"
        }
      },
      {
        title: "Rust",
        link:"building-apps/rust",

        details: "Tutorials and examples to build apps for Mecha devices",
        icon: {
          dark: "/icons/rust.svg",
          light: "/icons/dark-rust.svg"
        }
      },
      {
        title: "Examples",
        link:"building-apps/examples",

        details: "Examples to build apps for Mecha devices",
        icon: {
          dark: "/icons/environment.svg",
          light: "/icons/dark-environment.svg"
        }
      }
    ]
  },
  {
    title: "Supported Devices",
    features: [
      {
        title: "Mecha Comet-M",
        link:"devices/mecha-comet-m",

        details: "Find out how to get your device up and running with Mecha",
        icon: {
          dark: "/icons/hardware.svg",
          light: "/icons/dark-hardware.svg"
        }
      },
      {
        title: "Raspberry PI",
        link:"devices/raspberry-pi",

        details: "Find out how to get your device up and running with Mecha",
        icon: {
          dark: "/icons/switch-on.svg",
          light: "/icons/dark-switch-on.svg"
        }
      },
      {
        title: "BYOD",
        link:"devices/byod",

        details: "Find out how to get your device up and running with Mecha",
        icon: {
          dark: "/icons/byod.svg",
          light: "/icons/dark-byod.svg"
        }
      }
    ]
  },
  {
    title: "Application Reference",
    features: [
      {
        title: "Developer CLI",
        link:"developer-cli/",

        details: "Get a quick overview and a jump-start on Mecha platform",
        icon: {
          dark: "/icons/built-on-mecha.svg",
          light: "/icons/dark-built-on-mecha.svg"
        }
      },
      {
        title: "Device Agent",
        link:"applications/device-agent",

        details: "Agent connects your devices with Mecha services",
        icon: {
          dark: "/icons/square-checkbox.svg",
          light: "/icons/dark-square-checkbox.svg"
        }
      },
       {
        title: "Device SDK",
        link:"applications/device-sdk",

        details: "Get a quick overview and a jump-start on Mecha platform",
        icon: {
          dark: "/icons/device-sdk.svg",
          light: "/icons/dark-device-sdk.svg"
        }
      },
       {
        title: "Device CLI",
        link:"applications/device-cli",

        details: "CLI to manage devices, ssh and networking ",
        icon: {
          dark: "/icons/built-on-mecha.svg",
          light: "/icons/dark-built-on-mecha.svg"
        }
      },
       {
        title: "REST API",
        link:"applications/rest-api",

        details: "REST API for integrations and external apps",
        icon: {
          dark: "/icons/news.svg",
          light: "/icons/dark-news.svg"
          
        }
      }
    ]
  }  
]

</script>
<div
  v-for="group in featuresGroups"
  :key="group.title"
>
  <FeaturesGroup 
    :features="group.features"
    :title="group.title"
  />
</div>
<Footer ></Footer>
