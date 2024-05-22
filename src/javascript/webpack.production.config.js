const path = require('path');

module.exports = {

    entry: './src/javascript/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'bundle.production.js'
    },

    mode: 'production'
};