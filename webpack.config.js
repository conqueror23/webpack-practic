const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackDeployPlugin = require("html-webpack-deploy-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const depenPackages = (isProd = "false") => {
  return {
    "react": {
      copy: [
        isProd
          ? {
              from: "umd/react.production.min.js",
              to: "react.production.min.js",
            }
          : { from: "umd/react.development.js", to: "react.development.js" },
      ],
      scripts: {
        variableName: "React",
        path: "react.production.min.js",
        devPath: "react.development.js",
      },
    },
    "react-dom": {
      copy: [
        isProd
          ? {
              from: "umd/react-dom.production.min.js",
              to: "react-dom.production.min.js",
            }
          : {
              from: "umd/react-dom.development.js",
              to: "react-dom.development.js",
            },
      ],
      scripts: {
        variableName: "ReactDOM",
        path: "react-dom.production.min.js",
        devPath: "react-dom.development.js",
      },
    },
  };
};

const moduleOptions = (path, packages) => {
  return {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "./src", packages),
        use: {
          loader: "babel-loader",
          options: {
            // presets: ["@babel/preset-env"],
            presets: require.resolve("babel-preset-react-app"),
          },
        },
      },
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: [/\.scss?$/, /\.sass?$/],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  };
};


const devPlugins = (packages) => {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", packages, "index.html"),
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackDeployPlugin({
      packages: depenPackages(),
    }),
  ];
};

module.exports = () => {
  const [operations, packages] = process.env.npm_lifecycle_event.split(":");
  // settings for static generating renamed css and js with random numbers
  if (operations.indexOf("dev") > -1) {
    return (config = {
      entry: path.resolve(__dirname, "./src", packages, "index.js"),
      // devtool: "inline-source-map",
      mode: "development",
      devServer: {
        // contentBase: path.join(__dirname, "./src", packages),
        // hot: true,
        // compress: true,
        // lazy: true,
        // port: 8000,
        // from react_afn
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "> 0.99%, not dead",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
          {
            test: /.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
          },
          {
            test: [/\.scss?$/, /\.sass?$/],
            use: ["style-loader", "css-loader", "sass-loader"],
          },
        ],
      },
      resolve: {
        extensions: [".js", ".ts", ".jsx", ".scss"],
      },
      // plugins: [...devPlugins(packages)],
    });
  } else {
    // return (config = {});
  }
};
