const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// config contains general configuration for all build modes
var config = {
    context: path.resolve(__dirname),
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
            },
            {
                test: /\.html?$/,
                exclude: /node_modules/,
                use: "html-loader",
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: "/src/index.html",
    })]
}

// by returning a function, configuration can be modified based on the build
// mode
module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.devtool = "eval-source-map";
    }

    return config;
}