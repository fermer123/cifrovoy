const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',

  entry:
    //какие файлы выбираю из папки src и помещаю в папку dist
    ['@babel/polyfill', './src/index.jsx'], //полный путь до папки методом path + обьединение методом resolve
  output: {
    //куда перекидываю файил и какое у него название
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    assetModuleFilename: 'assets/[name][ext]', //куда и под каким названием складываю
    clean: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
    },
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    //npx webpack serve
    port: 3000,
    compress: true, //сжатие файлов в момент отображения
    hot: true, // автоперезагрузка при изменении
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  stats: {
    errorDetails: true,
  },

  performance: {
    //убрать уведомления
    hints: false, //указываем подсказки отключены
    maxAssetSize: 512000, //указываем макс рамер изобр
    maxEntrypointSize: 512000, //если превышает то подгрузка после загрузки сайта
  },
  devtool: 'source-map',
  plugins: [
    new htmlWebpackPlugin({
      title: 'Webpack',
      filename: 'index.html', //название файла
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|jpg|png)$/i,
        type: 'asset/resource', //если подобный файл то изображение
      },
      {
        test: /\.(ttf|otf)$/i, //игнорирует регистр (i)
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./fonts/[name].[ext]`,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
