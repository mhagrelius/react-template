/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-dotenv", "snowpack-plugin-svgr"],
  routes: [],
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    splitting: true,
    target: "es2020",
  },
  packageOptions: {},
  devOptions: {
    port: 3000,
  },
  buildOptions: {},
  exclude: ["**/node_modules/**/*", "**/mocks/**/*", "*.test.*", "*.stories*"],
}
