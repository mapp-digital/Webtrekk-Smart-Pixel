const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "/server/vue3",
  publicPath: "/apps/vue3/",
  lintOnSave: false,
});
