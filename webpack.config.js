const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// config contains general configuration for all build modes
var config = {
    context: path.resolve(__dirname),
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.html?$/,
                exclude: /node_modules/,
                use: "html-loader",
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'autoprefixer',

                                ],
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 384000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "/src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ]
}

// by returning a function, configuration can be modified based on the build
// mode
module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = "eval-source-map";
    }

    return config;
}