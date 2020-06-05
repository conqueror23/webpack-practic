const path =require('path');

module.exports ={
    // settings for static generating renamed css and js with random numbers
    entry:'./src/country/getCountryList.js',
    // entry:'./src/package-a/main.js',
    // entry:{
    //     packagea:"./src/package-a/packagea.js",
    //     pcakageb:"./src/package-b/package-b.js"
    //     // packagea:{
    //     //     import:'./src/package-a/packagea.js',
    //     //     filename:"dist/[name][ext]",
    //     // },
    //     //
    //     //     import:"./src/package-b/package-b.js",
    //     //     filename:"dist/[name][ext]"},
    // },
    // entry:['./src/package-a/packagea.js','./src/package-b/package-b.js'],

    mode:"production",
    output:{
        filename:"getCountryList-[contentHash:5].js",
        path:__dirname+"/dist/",
        libraryTarget:"umd"
    },

    // output:{
    //     path:path.resolve(__dirname,'dist'),
    //     filename:`dist/[name].js`
    // }
    // module:{
    //     rules:[

    //         {test:/\.css$/,use:'css-loader'},
    //         {test:/\.ts$/,use:'ts-loader'},

    //     ]
    // }
}