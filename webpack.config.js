const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development", // production
    entry: {
        app: path.resolve(__dirname, "./src/js/app.js"),
    },
    output: { path: path.resolve(__dirname, "public"), filename: "[name].js" },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Home",
            filename: "index.html",
            template: "./src/temp.html",
            chunks: ["app"],
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        port: 4000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
};
