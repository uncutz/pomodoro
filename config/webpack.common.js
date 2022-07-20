const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const modulesCollection = [
    {
        'common':
            [
                'CommonMain',
            ]
    },
    {
        'sites/index':
            [
                'IndexMain'
            ],
    },
    {
        'sites/Session':
            [
                'SessionMain'
            ],
    },
    {
        'sites/session-config':
            [
                'SessionConfigMain'
            ],
    },
    {
        'components/timer':
            [
                'TimerMain'
            ],
    },
]

let paths = modulesCollection.map((module) => {
    return module[Object.keys(module)[0]].reduce((config, main) => {
        config[main] = `./web/${Object.keys(module)[0]}/${main}.js`;
        return config;
    }, {})
}, {})

paths = paths.reduce((pathConfig, currentObject) => {
    pathConfig = {...pathConfig, ...currentObject}
    return pathConfig
})

const config = {
    entry: paths,
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