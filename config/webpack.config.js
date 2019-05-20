const fs = require('fs');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const autoprefixer = require('autoprefixer')

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
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { 
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              module: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 2 version"
                  ]
                })
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [htmlPlugin]
};