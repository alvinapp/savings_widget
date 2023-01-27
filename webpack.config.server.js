const { resolve } = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const webPackConfig = (env) => {
  const config = require(resolve(process.cwd(), env.config));
  const SERVER_HOST = config.HOST || "http://localhost";
  const SERVER_PORT = config.PORT || 8000;
  const SERVER_DOMAIN = `${SERVER_HOST}:${SERVER_PORT}`;

  console.log("configuration", config);
  console.log("SERVER_HOST", SERVER_HOST);
  console.log("SERVER_PORT", SERVER_PORT);
  console.log("SERVER_DOMAIN", SERVER_DOMAIN);

  const _config = {
    entry: {
      app: ["./src/server/index.tsx"],
      Widget: ["./src/server/widget.ts"],
    },
    output: {
      filename: "[name].js",
      path: resolve(__dirname, "dist", config["ENVIRONMENT"] || "development"),
      library: "[name]",
      libraryTarget: "umd",
      libraryExport: "default",
      sourceMapFilename: `.source_maps/[name].js.map`,
    },
    resolve: {
      alias: {
        client: [resolve("./src/client")],
        server: [resolve("./src/server")],
        assets: [resolve("./src/client/assets")],
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      fallback: {
        path: false,
        buffer: false,
        crypto: false,
      },
    },
    devtool: ["development", "staging"].includes(config["ENVIRONMENT"])
      ? "inline-source-map"
      : "source-map",
    watch: true,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: [/node_modules/],
        },
        { test: /\.(js|jsx)$/, loader: "source-map-loader" },
        {
          test: /.(js|jsx)$/,
          exclude: [/node_modules/, /.ejs/],
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          include: [resolve(__dirname, "src/client"), resolve("node_modules")],
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp|svg)$/,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        AppConfig: JSON.stringify(config),
        __SERVER_DOMAIN__: JSON.stringify(SERVER_DOMAIN),
      }),
      new HtmlWebpackPlugin({
        template: "./src/server/index.ejs",
        templateParameters: {
          WIDGET_SCRIPT_SRC: JSON.stringify(`Widget.js`),
        },
        hash: false,
        filename: "index.html",
        inject: "body",
        excludeChunks: ["Widget"],
      }),
    ],
  };

  if (config["ENVIRONMENT"] === "production") {
    _config.optimization = {
      minimizer: [new TerserWebpackPlugin()],
    };
  } else {
    _config.devServer = {
      port: SERVER_PORT,
      open: false,
      hot: true,
      compress: true,
    };
  }

  return _config;
};

module.exports = webPackConfig;
