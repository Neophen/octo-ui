const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/app.scss")]
    }
  },

  configureWebpack: {
    externals: ["vue", "@vue/composition-api", "@popperjs/core", "portal-vue"]
  }
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "@/scss/_variables.scss";
  //       `
  //     }
  //   }
  // }
};
