const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, '../src/stage-1/index.js'),
    },
    resolve: {
        extensions: [],
        alias: {
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                        ],
                        // jsx支持
                        '@babel/preset-react',
                    ],
                    plugins: [
                    ],
                    cacheDirectory: true,
                    cacheCompression: true,
                    compact: true,
                },
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    externals: {
    }
};
