const fs = require('fs');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const appDirectory = fs.realpathSync(process.cwd());

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: cssOptions,
    },
    {
      // Options for PostCSS as we reference these options twice
      // Adds vendor prefixing based on your specified browser support in
      // package.json
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebook/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
          }),
        ],
      },
    },
  ];
  if (preProcessor) {
    loaders.push(require.resolve(preProcessor));
  }
  return loaders;
};

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
      // To handle path modules
      new TsConfigPathsPlugin()
    ]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        use: getStyleLoaders({
          importLoaders: 1,
        }),
      },
      {
        test: /\.scss$/,
        use: getStyleLoaders({
          importLoaders: 2,
          modules: true,
          getLocalIdent: getCSSModuleLocalIdent
        }, 'sass-loader'),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              name: "./static/images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};