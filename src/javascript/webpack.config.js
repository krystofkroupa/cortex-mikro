const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

    module: {
        rules: [
            {
                test: /\.sass$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ],
            },
        ],
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 500,
    },

    entry: {
        'javascript': './src/javascript/index.js',
        'animations' :'./src/sass/animations.sass',
        'burger' :'./src/sass/burger.sass',
        'grid' :'./src/sass/grid.sass',
        'nav' :'./src/sass/nav.sass',
        'page2' :'./src/sass/page2.sass',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'js/[name].bundle.js'
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'scss/[name].css'
        })
    ],

    mode: 'development'
};