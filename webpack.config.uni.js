const path =require('path');

module.exports ={
    // settings for static generating renamed css and js with random numbers
    entry:'./src/country/getCountryList.js',
    mode:"development",
    target:"node",
    devtool:'inline-source-map',
    output:{
        filename:"country/getCountryList.js",
        // filename:"country/testDist.js",
        path:__dirname+"/dist/",
    },
    module:{
        rules:[
            {
                test:"/\.js$/",
                // exclude: /(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        "presets": [
                            [
                              "es2015",
                              {
                                "targets": {
                                  "ie": "11"
                                },
                                "useBuiltIns": "true",
                                "corejs": {"verison":"3","proposals":false},
                                "debug":true
                              }
                            ]
                          ],
                          "plugins": [
                            "@babel/plugin-proposal-class-properties",
                            [
                              "@babel/plugin-transform-runtime",
                              {
                                "absoluteRuntime": true,
                                "corejs": true,
                                "helpers": true,
                                "regenerator": true,
                                "useESModules": false,
                                "version": "7.0.0-beta.0"
                              }
                            ]
                          ]
                    }
                },
                
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