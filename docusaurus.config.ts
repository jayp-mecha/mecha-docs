import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

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
        docsPluginId: "console-api",
        config: {
          mechaConsole: {
            specPath: "static/examples/mechaApis.yaml",
            outputDir: "docs/apis",
            sidebarOptions: {
              groupPathsBy: "tag"
            },
          },
        },
      },
    ],
  ],

  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  organizationName: "mecha",
  projectName: "mecha-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  themes: ["docusaurus-theme-openapi-docs"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
     ( {
        docs: {
          sidebarCollapsible: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // add @theme/ApiItem here
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.palenight,
      additionalLanguages: ["powershell"],
    },
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: "Docs",
    //       items: [
    //         {
    //           label: "Tutorial",
    //           to: "/docs/intro",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Community",
    //       items: [
    //         {
    //           label: "Stack Overflow",
    //           href: "https://stackoverflow.com/questions/tagged/docusaurus",
    //         },
    //         {
    //           label: "Discord",
    //           href: "https://discordapp.com/invite/docusaurus",
    //         },
    //         {
    //           label: "Twitter",
    //           href: "https://twitter.com/docusaurus",
    //         },
    //       ],
    //     },
    //     {
    //       title: "More",
    //       items: [
    //         {
    //           label: "Blog",
    //           to: "/blog",
    //         },
    //         {
    //           label: "GitHub",
    //           href: "https://github.com/facebook/docusaurus",
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap',
      type: 'text/css',
    },
  ],
};

export default config;
