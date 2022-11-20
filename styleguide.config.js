const path = require("node:path");

const getComponent = (name) =>
  path.join(__dirname, "./src/styleguidist/", name);

module.exports = {
  getComponentPathLine: () => "",
  pagePerSection: true,
  sections: [
    {
      name: "Home",
      content: "./pages/home.md",
    },
    {
      name: "Getting started",
      content: "./pages/getting-started.md",
    },
    {
      name: "Components",
      // content: "docs/ui.md",
      sectionDepth: 4,
      components: "src/components/**/*.tsx",
      exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
      usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Customization",
      // content: "docs/ui.md",
      sectionDepth: 4,
      exampleMode: "collapse", // 'hide' | 'collapse' | 'expand'
      usageMode: "collapse", // 'hide' | 'collapse' | 'expand'
      sections: [
        {
          name: "Theming",
          content: "./pages/customization/theming.md",
        },
      ],
    },
  ],
  styleguideComponents: {
    ComponentsListRenderer: getComponent("ComponentsListRenderer.tsx"),
    LinkRenderer: getComponent("LinkRenderer.tsx"),
    LogoRenderer: getComponent("LogoRenderer.tsx"),
    SectionHeadingRenderer: getComponent("SectionHeadingRenderer.tsx"),
    StyleGuideRenderer: getComponent("StyleGuideRenderer.tsx"),
    TableOfContentsRenderer: getComponent("TableOfContentsRenderer.tsx"),
    ToolbarButtonRenderer: getComponent("ToolbarButtonRenderer.tsx"),
    Wrapper: getComponent("Wrapper.tsx"),
  },
  styleguideDir: "build",
  template: {
    favicon: "https//johanbook.com/favicon.ico",
  },
  theme: {
    color: {
      // sidebarBackground: "#7A4988",
    },
    sidebarWidth: 250,
  },
  title: "Aurora",
  tocMode: "collapse",
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  },
};
