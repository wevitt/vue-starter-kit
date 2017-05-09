const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "./dist/app.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "sass-loader"
                })
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("./dist/style.css")
    ]
};