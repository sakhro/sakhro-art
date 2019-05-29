const fs = require('fs');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const autoprefixer = require('autoprefixer')
const path = require('path');
// This helper function is not strictly necessary.
// I just don't like repeating the path.join a dozen times.
function srcPath(subdir) {
    return path.resolve(__dirname, subdir);
}

const appDirectory = fs.realpathSync(process.cwd());

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

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
    alias: {
      components: srcPath('/src/components/'),
      config: srcPath('/src/config/'),
      static: srcPath('/static/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
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