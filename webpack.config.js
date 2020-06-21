const path = require("path");
const HTMLPlugins = require("html-webpack-plugin");

const devSeverOptions = {
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    hot: true,
    compress: true,
    port: 8000,
  },
};

const moduleOptions = {
  rules: [
    {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'},
    {test: /\.jsx$/ , loader:'babel-loader', exclude: '/node_modules/'},
    {
      test: /.ts$/,
      use: { loader: "ts-loader" },
      exclude: /node_modules/,
    },
    {
      test: [/.scss?$/, /.sass?$/],
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  ],
};

const devPlugins = [new HTMLPlugins()];

module.exports = () => {
  const [operations, packages] = process.env.npm_lifecycle_event.split(":");
  // console.log('path here',path.resolve(__dirname,'./src',packages,'index.js'));
  // settings for static generating renamed css and js with random numbers
  // console.log(`operations ${operations} and the packages ${packages}`);
  if (operations.indexOf("dev") > -1) {
    return (config = {
      entry: path.resolve(__dirname, "./src", packages, "index.js"),
      output:{
        path:path.resolve("dist"),
        filename:"bundle.js",
      },
      // shared:['react','react-dom'],
      devServer: {
        contentBase: path.join(__dirname, "./src"),
        hot: true,
        compress: true,
        port: 8000,
      },
      module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            exclude:/node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            }
          },
          {
            test: /.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/,
          },
          {
            test: [/\.scss?$/, /\.sass?$/],
            use: ["style-loader", "css-loader", "sass-loader"],
          }
        ],
      },
      // plugins: [...devPlugins],
    });
  } else {
    return (config = {});
  }
};
