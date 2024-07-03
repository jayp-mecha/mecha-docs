import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { NAVBAR_GITHUB_COMPONENT } from "./src/utils/constants";

const config: Config = {
  title: "Mecha Docs",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "console-api",
        docsPluginId: "default",
        config: {
          mechaConsole: {
            specPath: "static/examples/mechaApis.yaml",
            outputDir: "docs/apis",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
  ],
  url: 'https://docs.v1.dev.mecha.build',
  baseUrl: "/",
  organizationName: "mecha",
  projectName: "mecha-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  themes: [
    ["docusaurus-theme-openapi-docs", {}],
    "@docusaurus/theme-mermaid",
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarCollapsible: true,
          sidebarCollapsed: false,
          sidebarPath: "./sidebars.ts",
          docItemComponent: "@theme/ApiItem",
          admonitions: {
            keywords: ['mec-info', 'mec-warn', 'mec-danger',],
            extendDefaults: true,
          },
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      appId: 'YOUR_APP_ID',
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "Mecha Logo",
        src: "img/dark-logo.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "hardwareSidebar", 
          position: "left",
          label: "Comet-M",
        },
        {
          type: "docSidebar",
          sidebarId: "apiSidebar",
          position: "left",
          label: "API",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: "html",
          position: "right",
          value: `${NAVBAR_GITHUB_COMPONENT}`,
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.jettwaveDark,
      additionalLanguages: ["powershell"],
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap",
      type: "text/css",
    },
  ],
  markdown: {
    mermaid: true,
  },
};

export default config;
