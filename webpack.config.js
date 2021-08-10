const path = require("path");

module.exports = {
  entry: {
    index: ["regenerator-runtime/runtime.js", "./index.js"],
    //index: "./index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve("./public"),
    publicPath: "/LolGame/",
  },
  module: {
    rules: [
      //第一個loader編譯JSX
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-react"] },
        },
      },
      //第二個loader編譯ES6
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
