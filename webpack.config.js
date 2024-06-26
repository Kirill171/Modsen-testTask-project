const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // Точка входа для сборки проекта (изменили расширение на .tsx)

  output: {
    filename: 'bundle.js', // Имя выходного файла сборки
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла сборки
    publicPath: '/', // Добавляем publicPath для корректной работы devServer
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Регулярное выражение для обработки файлов JavaScript и TypeScript
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: 'babel-loader', // Используем загрузчик Babel
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'], // Пресеты Babel для поддержки ES6+, JSX и TypeScript
          },
        },
      },
      {
        test: /\.css$/, // Регулярное выражение для обработки файлов с расширением .css
        use: ['style-loader', 'css-loader'], // Загрузчики, используемые для обработки CSS-файлов
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // Регулярное выражение для обработки изображений
        type: 'asset/resource', // Используем загрузчик asset/resource для обработки изображений
      },
      {
        test: /\.(js|jsx|ts|tsx)$/, // Регулярное выражение для проверки ESLint
        exclude: /node_modules/,
        enforce: 'pre', // Указываем, что это должно быть выполнено до обычной сборки
        use: {
          loader: 'eslint-loader',
          options: {
            emitWarning: true, // Отправлять предупреждения как ошибки
            configFile: './.eslintrc.json', // Путь к файлу конфигурации ESLint
          },
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'png', 'jfif'], // Расширения файлов, которые webpack будет рассматривать
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/') // Указываем алиас для папки с ресурсами (assets)
      // Добавьте другие алиасы по мере необходимости
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
    historyApiFallback: true, // Добавляем параметр для поддержки SPA (одностраничных приложений)
  },

  mode: 'development', // Режим сборки
};
