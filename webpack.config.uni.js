const path =require('path');

module.exports ={
    // settings for static generating renamed css and js with random numbers
    entry:'./src/country/getCountryList.js',
    mode:"production",
    // devtool:'inline-source-map',
    output:{
        filename:"country/getCountryList.js",
        path:__dirname+"/dist/",
    },
    module:{
        rules:[
            {
                test:"/\.js$/",
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                }
            },
            {
                test:"/\.m?ts&/",
                use:{
                    loader:'ts-loader',
                    options :{
                        transpileOnly: true,
                        compilerOptions: {
                            "module": "es6",
                            //todo due to a possibe ts bug
                            //set es6 for chart
                            //otherwise use es5 for ie
                            "target": "es5"
                            // lib: ['es5', 'es6', 'es7']
                        },
                    }
                }
            }
        ]
        
      }
    

}