const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');
const {srcPath, distPath, htmlPlugin} = require('../config')
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
    stats: {
        children: false
    },
    devServer: {
        port: 9006, // 端口配置
        // http代理配置，更多查阅：https://github.com/chimurai/http-proxy-middleware#options
        proxy: {
            '/api': {
                target: 'http://服务器IP:Port',
                changeOrigin: true,
                autoRewrite: 302
            }
        },
        contentBase: distPath,
        hot: true,               // 启用HotModuleReplacement
        stats: 'minimal',        // 精简编辑信息输出
        overlay: true,            // 是否覆盖页面显示错误信息
        historyApiFallback: true  // 支持vue-router history 模式
    },
    plugins: [
        new HtmlWebpackPlugin(htmlPlugin),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: srcPath,
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }
        ]
    }
})
