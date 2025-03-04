const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path') // bibliothèque native de node.js

//__dirname = le dossier courant , ici ce sera tearoom-frontend
// c-t-d le dossier dans lequel le fichier actuel se trouve

module.exports = {

    //key:value

    entry: "./main.js",
    output: {
        filename : "[name].bundle.js",
        path : path.resolve(__dirname, "dist") 
    },
    mode : "development",
    module: {
        //key:value
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.(webp|gif|png|jp(e)?g)$/,
                type : 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: [".js"]
    },
    plugins: [
        new HtmlPlugin({
            template: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "data" , to : "data"
                },
                {
                    from: "assets", to : "assets"
                }
            ]
        })
    ]


}