const path = require('path')

module.exports = {
    // 配置打包模式为 开发模式
    mode: 'development',
    // 配置入口
    entry: './src/index.js',
    // 配置出口
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'
    },
    // 配置加载器
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}