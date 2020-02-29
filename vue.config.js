const path = require("path");

module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/app.scss")]
    }
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
