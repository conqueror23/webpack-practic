const path =require('path');

module.exports ={
    // settings for static generating renamed css and js with random numbers
    entry:'./src/country/getCountryList.js',
    mode:"production",
    target:"iife",
    output:{
        filename:"getCountryList-[contentHash:5].js",
        path:__dirname+"/dist/",
    },
    module:{
        rules:[
            {
                test:"/\.js$/",
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'bable-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
    

}