const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require('dotenv')
const path = require('path')
  dotenv.config()
const { PORT, NODE_ENV } = process.env

module.exports = {
  entry: './frontend/src/index.js',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'frontend/src/index.html')
    })
  ],
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3000,
    hot: true,
    index: 'index.html',
    open: true
  }
}
