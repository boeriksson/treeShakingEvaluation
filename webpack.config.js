const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: [path.join(__dirname, './src/index.js')],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'wp3.js',
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                options: {
                    presets: [['env', { 'modules': false }]]
                },
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    // drop_console: true
                }
            }
        })
    ],
    devtool: 'none'
};