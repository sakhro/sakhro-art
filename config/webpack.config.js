const fs = require('fs');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const autoprefixer = require('autoprefixer')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: `${appDirectory}/dist`,
    publicPath: '/',
    filename: '[hash].bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [
      new TsConfigPathsPlugin() // To handle path modules
    ]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
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

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};