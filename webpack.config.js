const path = require("path");

module.exports = {
    entry: {
        background: "./src/background/background.ts",
        content: "./src/content/content.ts",
        popup: "./src/popup/popup.ts"
    },
    mode: 'development',
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./[name].js"
    }
};
