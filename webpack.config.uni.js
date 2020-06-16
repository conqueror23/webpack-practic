const path =require('path');

module.exports ={
    // settings for static generating renamed css and js with random numbers
    entry:'./src/country/getCountryList.js',
    mode:"production",
    target:"node",
    output:{
        filename:"getCountryList-[contentHash:5].js",
        path:__dirname+"/dist/",
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
          }
        ]
      }
    

}