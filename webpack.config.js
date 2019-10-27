// @ts-check
const path = require("path");

module.exports = {
    entry: {
        content: "./src/content/content.ts",
        popup: "./src/popup/popup.ts"
    },
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./[name]/[name].js"
    }
};
