const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    //какие файлы выбираю из папки src и помещаю в папку dist
    filename: path.resolve(__dirname, 'src/index.js'), //полный путь до папки методом path + обьединение методом resolve
  },
  output: {
    //куда перекидываю файил и какое у него название
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    assetModuleFilename: 'img/[name][ext]', //куда и под каким названием складываю
    clean: true,
  },
  devServer: {
    port: 9000,
    compress: true, //сжатие файлов в момент отображения
    hot: true, // автоперезагрузка при изменении
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  performance: {
    //убрать уведомления
    hints: false, //указываем подсказки отключены
    maxAssetSize: 512000, //указываем макс рамер изобр
    maxEntrypointSize: 512000, //если превышает то подгрузка после загрузки сайта
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Webpack',
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
        test: /\.(ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `./fonts/[name].[ext]`,
            },
          },
        ],
      },
    ],
  },
};
