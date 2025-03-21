const postcss = require("rollup-plugin-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

module.exports = {
  env: "production",
  minify: true,
  rollup(config, options) {
    config.plugins.push(
      postcss({
        include: "./src/css/out/rct_style.css",
        extract: "rct_style.css",
        minimize: true,
        sourceMap: true,
      })
    );
    return config;
  },
};
