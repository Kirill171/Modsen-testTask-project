const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
            configFile: './.eslintrc.json',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@api': path.resolve(__dirname, 'src/api/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    historyApiFallback: true,
  },
  mode: 'development',
};
