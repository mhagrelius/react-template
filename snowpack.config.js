/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: "/dist",
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "snowpack-plugin-svgr",
    ["@snowpack/plugin-webpack"],
  ],
  routes: [],
  packageOptions: {},
  devOptions: {
    port: 3000,
  },
  buildOptions: {
    jsxInject: "import React from 'react'",
  },
  exclude: ["**/node_modules/**/*", "**/mocks/**/*", "*.test.*", "*.stories*"],
}
