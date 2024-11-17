// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'development', // または 'production'
    cache: {
        type: 'filesystem', // ファイルシステムキャッシュを有効にする
    },
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.glsl$/,
                use: [
                    'raw-loader', // まずraw-loaderで文字列として読み込む
                    'glslify-loader', // その後glslify-loaderで処理
                ],
                exclude: /node_modules/, // node_modulesを除外
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.glsl'],
    },
    watch: true, // ここでwatchを有効にする
};