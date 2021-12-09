const {merge} = require('webpack-merge');
const path = require('path');
const common = require( path.resolve(__dirname,'webpack.config.js'));
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.terserMinify,
        terserOptions: {
          compress: true,
        },
      }),
    ],
  },

});