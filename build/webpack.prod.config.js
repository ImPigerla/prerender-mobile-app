process.env.NODE_ENV = 'production'

let baseConfig = require('./webpack.base.config'),
    {distPath, htmlPlugin} = require('../config'),
    webpackMerge = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    PrerenderSPAPlugin = require('prerender-spa-plugin'),
    Renderer = PrerenderSPAPlugin.PuppeteerRenderer,
    CompressionPlugin = require('compression-webpack-plugin')

module.exports = webpackMerge(baseConfig, {
    stats: {
        entrypoints: false,
        children: false
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
                styles: {
                    name: 'styles',
                    test: /\.s?css$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        },
        runtimeChunk: 'single',
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                cache: true,
                parallel: true,
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        // 清掉dist目录及文件
        new CleanWebpackPlugin([distPath], {
            root: process.cwd()
        }),
        new HtmlWebpackPlugin(Object.assign({
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }, htmlPlugin)),
        // gzip static预压缩
        new CompressionPlugin(),
        // 预渲染
        new PrerenderSPAPlugin({
            staticDir: distPath,
            routes: ['/'],
            renderer: new Renderer({
                renderAfterDocumentEvent: 'render-event'
            })
        })
    ]
})
