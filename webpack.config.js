const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackDeployPlugin = require('html-webpack-deploy-plugin');
const devSeverOptions = (packages) => {
  return {
    contentBase: path.join(__dirname, "./src", packages),
    hot: true,
    compress: true,
    lazy: true,
    filename: "dist.js",
    port: 8000,
  };
};

const depenPackages=(isProd='false')=>{
  return {
    'react': {
        copy: [
            isProd ? { from: 'umd/react.production.min.js', to: 'react.production.min.js' } :
                { from: 'umd/react.development.js', to: 'react.development.js' }
        ],
        scripts: {
            variableName: 'React',
            path: 'react.production.min.js',
            devPath: 'react.development.js'
        }
    },
    'react-dom': {
        copy: [
            isProd ? { from: 'umd/react-dom.production.min.js', to: 'react-dom.production.min.js' } :
                { from: 'umd/react-dom.development.js', to: 'react-dom.development.js' },
        ],
        scripts: {
            variableName: 'ReactDOM',
            path: 'react-dom.production.min.js',
            devPath: 'react-dom.development.js'
        }
    },
    // 'i18next': {
    //     copy: [
    //         isProd ?
    //             { from: 'dist/umd/i18next.min.js', to: 'i18next.min.js' } :
    //             { from: 'dist/umd/i18next.js', to: 'i18next.js' }
    //     ],
    //     scripts: {
    //         variableName: 'i18next',
    //         path: 'i18next.min.js',
    //         devPath: 'i18next.js'
    //     }
    // },

}
}

const moduleOptions = {
  rules: [
    {
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
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

const devPlugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "index.html"),
  }),
  new HtmlWebpackDeployPlugin({
    packages: depenPackages(),
  }),
];

module.exports = () => {
  const [operations, packages] = process.env.npm_lifecycle_event.split(":");
  // console.log('path here',path.resolve(__dirname,'./src',packages,'index.js'));
  // settings for static generating renamed css and js with random numbers
  // console.log(`operations ${operations} and the packages ${packages}`);
  if (operations.indexOf("dev") > -1) {
    return (config = {
      entry: path.resolve(__dirname, "./src", packages, "index.js"),
      output: {
        path: path.resolve(__dirname, "output"),
        filename: "bundle.js",
      },
      devtool:"inline-source-map",
      devServer: {
        contentBase: path.join(__dirname, "./src", packages),
        hot: true,
        compress: true,
        lazy: true,
        filename: "dist.js",
        port: 8000,
      },
      module: { ...moduleOptions },
      resolve: {
        extensions: [".tsx", ".js"],
      },
      plugins: [...devPlugins],
    });
  } else {
    // return (config = {});
  }
};
