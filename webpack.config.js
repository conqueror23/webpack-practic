const path = require("path");
const HTMLPlugins = require('html-webpack-plugin');


const devSeverOptions={
  devServer:{
    contentBase:path.join(__dirname,'./src'),
    hot:true,
    compress:true,
    port:8000,
  }
}

const moduleOptions={
  rules: [
    {
      test: ["/.jsx?$/",'/.js?$/'],
      use:"babel-loader",
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

const devPlugins =[
  new HTMLPlugins(),
];
const commonSetting=(packages)=>{return {
  entry: path.resolve(packages,'index.js'),
  shared: ['react', 'react-dom'],
  module: {...moduleOptions},
  output:{
    libraryTarget:"umd", 
    filename:"bundle.js",
  },
  stats:{ colors: true},
}
}


module.exports = () => {
  const [operations,packages] = process.env.npm_lifecycle_event.split(":");
  // console.log('path here',path.resolve(__dirname,'./src',packages,'index.js'));
  // settings for static generating renamed css and js with random numbers
  // console.log(`operations ${operations} and the packages ${packages}`);

  if(operations.indexOf('dev')>-1){
    return config={
      ...commonSetting,
      ...devSeverOptions,
      plugins:[...devPlugins],

    }
  }else{
    return config={...commonSetting}
  }
};
