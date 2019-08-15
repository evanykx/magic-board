'use strict';

const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    entry: path.join(resolveApp('src'), 'index.tsx'),
    output: {
        filename: 'bundle.js',
        path: resolveApp('dist')
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(resolveApp('public'), 'index.html')
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                resolveApp('src')
            ],
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties']
            }
        },{
            test: /\.(ts|tsx)$/,
            use: ['ts-loader']
        },{
            test: /\.(png|jpg|jpeg|gif)$/,
            use: ['file-loader']
        },{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },{
            test: /\.less$/,
            use: ['style-loader','css-loader','less-loader']
        },{
            test: /\.(scss|sass)$/,
            use: ['style-loader','css-loader','sass-loader']
        }]
    },
    devServer: {
        contentBase: resolveApp('dist'),
        hot: true,
        port: 9900
    },
    devtool: 'source-map'
}