const path = require("path");

module.exports = {
  plugins: [
    {
      name: "typescript",
      options: {
        useBabel: true,
        useEslint: true,
        forkTsChecker: {
          tsconfig: "./tsconfig.json",
          tslint: undefined,
          watch: "./src",
          typeCheck: true,
        },
      },
    },
    "eslint",
  ],
  modifyWebpackConfig: (config) => {
    const customConfig = { ...config.webpackConfig };
    customConfig.resolve["alias"] = {
      "@ui": path.resolve("./src/ui/"),
      "@pages": path.resolve("./src/pages/"),
    };
    return customConfig;
  },
};
