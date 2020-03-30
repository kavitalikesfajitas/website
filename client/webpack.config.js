const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MAIN_DIR_FOLDER = 'app';
const IMAGE_DIR = path.resolve(__dirname, `${MAIN_DIR_FOLDER}/src/images`);

const BUILD_DIR = path.resolve(__dirname, `dist/${MAIN_DIR_FOLDER}`);
const APP_DIR = path.resolve(__dirname, `${MAIN_DIR_FOLDER}/src/app`);

const config = {
  context: path.join(__dirname, `${MAIN_DIR_FOLDER}/src`),
  mode: 'production',
  devtool: 'inline-sourcemap',
  entry: `${APP_DIR}/index.js`,
  output: {
    path: BUILD_DIR,
    filename: 'client.min.js'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/i, // to support eg. background-image property
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, // to support @font-face rule
        loader: 'url-loader',
        query: {
          limit: '10000',
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.js?$/,
        include: APP_DIR,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: [
            'react-html-attrs',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }]
          ]
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    host: 'localhost', // Defaults to `localhost`
    port: 5000, // Defaults to 8080,
    proxy: {
      '^/api/*': {
        target: 'http://localhost:3000/',
        secure: false
      }
    },
    openPage: 'index.html'
  },

  plugins: [
    new CleanWebpackPlugin([BUILD_DIR]),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyPlugin([
      {
        from: IMAGE_DIR,
        to: path.join(BUILD_DIR, 'images')
      }
    ])
  ]
};

module.exports = config;
