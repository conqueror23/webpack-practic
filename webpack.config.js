const path = require("path");

module.exports = () => {
  const [operations,packages] = process.env.npm_lifecycle_event.split(":");
  // settings for static generating renamed css and js with random numbers
  console.log(`operations ${operations} and the packages ${packages}`);
  const config = {
    entry: [`./src/${packages}/index.js`],
    mode: "production",
    // target:"node",
    // devTools:"source-map",
    // output:{
    //     // filename:"getCountryList-[contentHash:5].js",
    //     path:__dirname+"/dist/",
    //     libraryTarget:"umd2",
    //     sourceMapFilename:"[file].map",
    //     chunkFilename:"[id.js]"
    // },
    module: {
      rules: [
        {
          test: "/.jsx?$/",
          include: [path.resolve(__dirname, "app")],
        },
        {
          test: "/.tsx?$/",
          use: "ts-loader",
          include: [path.resolve(__dirname, "app")],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ["ts", "tsx", "js"],
    },
    output: {
      filename: `${packages}-[contentHash:5].js`,
      path: path.resolve(__dirname, `dist/${packages}`),
    },
  };
  return config;
};
