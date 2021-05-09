const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, '../src/stage-2/index.tsx'),
    },
    resolve: {
        extensions: ['.ts'],
        alias: {
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/,
                loader: require.resolve('babel-loader'),
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            filename: 'index.html',
        }),
    ],
    externals: {
    },
    devtool: false
};
