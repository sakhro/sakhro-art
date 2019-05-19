const fs = require('fs');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${appDirectory}/dist`,
    publicPath: '/',
    filename: '[hash].bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [htmlPlugin]
};