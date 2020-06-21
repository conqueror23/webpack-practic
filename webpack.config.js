const path = require("path");


const devSeverOptions={
  devServer:{
    contentBase:path.join(__dirname,'dist'),
    compress:true,
    port:8000,
  }
}
const moduleOptions={
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
    {
      test:[/.scss?$/,/.sass?$/],
      use:["style-loader","css-loader","sass-loader"],
    }
  ],
}
// const outputOptions={
//   filename: `${packages}-[contentHash:5].js`,
//   path: path.resolve(__dirname, `dist/${packages}`),
// }
const commonSetting=(packages)=>{return {
  entry: path.resolve(__dirname,'src',packages,'index.js'),
  module: {...moduleOptions},
}
}
module.exports = () => {
  const [operations,packages] = process.env.npm_lifecycle_event.split(":");
  // settings for static generating renamed css and js with random numbers
  // console.log(`operations ${operations} and the packages ${packages}`);

  if(operations.indexOf('dev')>-1){
    return config={
      ...commonSetting,
      // ...devSeverOptions
    }
  }else{
    return config={...commonSetting}
  }
};
