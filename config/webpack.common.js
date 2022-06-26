const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

const assetPath = path.resolve(__dirname, "../web/js/main.js")

const config = {
    entry: assetPath,
    output: {
        library: "Module",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
        },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader, // creates style sheets from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "less-loader", // compiles Less to CSS
                ],
        },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
        }
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
}

module.exports = config;