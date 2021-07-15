__webpack_base_uri__ = 'http://localhost:8080';
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sass|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.ttf$/,
                type: 'asset/inline'
            },

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'public/index.html',
        })
    ],
    devServer: {
        open: true
    }
};