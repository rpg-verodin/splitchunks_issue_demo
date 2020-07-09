const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var webpack = require('webpack')
var path = require('path')
module.exports = {
  entry: {
    app: `${__dirname}/app.js`,
    tester: `${__dirname}/components/Tester.js`
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    libraryTarget: 'var',
    library: ['components', '[name]'],
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /pdfmake.js$/],
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './build/ui_components'),
      'node_modules'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-transition-group|prop-types)[\\/]/,
          name: 'react',
          chunks: 'all',
        },
      }
    }
  }
}
