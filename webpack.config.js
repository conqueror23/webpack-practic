const path =require('path');

module.exports ={
    // settings for static generating renamed css and js with random numbers
    entry:['./src/package-a/packagea.js','./src/package-b/package-b'],
    mode:"production",
    // target:"node",
    // devTools:"source-map",
    output:{
        // filename:"getCountryList-[contentHash:5].js",
        path:__dirname+"/dist/",
        libraryTarget:"umd2",
        sourceMapFilename:"[file].map",
        chunkFilename:"[id.js]"
    },
    module:{
        rules:[
            {
                test:'/\.jsx?$/',
                include:[
                    path.resolve(__dirname,'app')
                ],
                excluede:[
                    path.resolve(__dirname,'app/demo-files')
                ]

            }
        ]
    }

}