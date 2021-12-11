const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/app.js', // input -> file will compile it
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                // options: { presets: ['@babel/env','@babel/preset-react'] }
            }, {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, './public'),
        },
        historyApiFallback: true,
        // hot: true,
    }
}