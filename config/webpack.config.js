const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const appDirectory = fs.realpathSync(process.cwd());

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    {
      loader: 'style-loader',
      options: {
        singleton: true
      }
    },
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
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: "static/js/[name].[contenthash:8].chunk.js",
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [
      // To handle path modules
      new TsConfigPathsPlugin()
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: getStyleLoaders({
          importLoaders: 1,
        }),
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: getStyleLoaders({
          importLoaders: 2,
          modules: true,
          getLocalIdent: getCSSModuleLocalIdent
        }, 'sass-loader'),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              name: "static/images/[hash]-[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      favicon: './public/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime/]),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    // new BundleAnalyzerPlugin()
  ]
};