/**
 * @author: houzhitao
 * @since: 2018-05-30 10:51
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const Dotenv = require('dotenv-webpack');

//corss-env 环境变量
const env = process.env.NODE_ENV;
console.log(path.resolve(`./build/env/.env.${env}`));

let webpackDevConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: ['babel-polyfill', path.resolve(__dirname, '../src/app.js')]
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js'
    },
    plugins: [
       //  new webpack.ProvidePlugin({
       //
       // }),
       // new webpack.DefinePlugin({
       //     'process.env': {
       //         NODE_ENV: JSON.stringify('development'),
       //         BASE_URL: JSON.stringify('http://dev-user.wanshifu.com/')
       //     }
       // }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: '万师傅平台',
            inject: true,
            hash: true,
            cache: true,
            template: './build/static/index.html',
            favicon: './build/static/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new Dotenv({
            path: path.resolve(`./build/env/.env.${env}`),
            safe: false,
            systemvars: false
        })
    ],
    devServer: {
        compress: true,
        port: 8000,
        host: '0.0.0.0',
        historyApiFallback: true,
        disableHostCheck: true
    }
};

module.exports = merge(baseWebpackConfig, webpackDevConfig);