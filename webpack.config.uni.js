const path =require('path');

module.exports ={
    // settings for static generating renamed css and js with random numbers
    entry:'./src/country/getCountryList.js',
    mode:"production",
    // target:"web",
    // devtool:'inline-source-map',
    output:{
        filename:"country/getCountryList.js",
        path:__dirname+"/dist/",
    },
    module:{
        rules:[
            {
                test:"/\.m?js$/",
                // exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'bable-loader',
                    options:{
                        presets: ['@babel/preset-env',{
                            targets: {
                                browsers: '> 1%, IE 11, not dead',
                              },
                        }],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
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