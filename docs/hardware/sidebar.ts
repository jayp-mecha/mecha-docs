import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  hardwareSidebar: [
    {
      type: "category",
      label: "Getting Started",
      collapsible: true,
      collapsed: false,
      items: ["hardware/get-started", "hardware/specifications"],
    },
    {
      type: "category",
      label: "Connectivity",
      collapsible: true,
      collapsed: true,
      items: [
        "hardware/connectivity/ssh-connectivity",
        "hardware/connectivity/serial-console",
        "hardware/connectivity/public-key-auth",
        "hardware/connectivity/putty-connectivity",
      ],
    },
  ],
};

export default sidebar.hardwareSidebar;
