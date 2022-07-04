
module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: [
        "Chrome > 31",
        "Android 4.1",
        "iOS 7.1",
        "ie >= 8",
        "> 1%",
      ],
      grid: true,
    }),
  ],
};
