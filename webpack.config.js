const path= require('path');
const [operation,packages] = process.env.npm_life_cycle.split(":");

if(operation.includes("dev")){
  module.exports={
    entry:path.resolve(__dirname,'src',packages,'index.js'),
    modules:[
      {
        test:/\.js$/|/\.jsx$/,
        loaders:[
          "@babel/preset-env",
          "@babel/preset-react"
        ]
      }
    ],

  }
}else{
  module.exports={
    entry:path.resolve(__dirname,'src',packages,'index.js'),
    modules:[
      {
        test:/\.js$/|/\.jsx$/,
        loaders:[
          "@babel/preset-env",
          "@babel/preset-react"
        ]
      } 
    ],
    output:{
      filename:'bundle.js',
    }
  }
  // build process

}
