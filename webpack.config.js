const path                  = require('path'),
      HtmlWebpackPlugin     = require('html-webpack-plugin'),
      MiniCssExtractPlugin  = require('mini-css-extract-plugin'),
      autoprefixer          = require('autoprefixer'),
      CopyPlugin            = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './assets/js/[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: { browser: ['last 2 versions'] },
              sourceMap: true,
              plugins: () => [ autoprefixer ]
            }
          },
          'resolve-url-loader',
          'sass-loader?outputStyle=compressed&sourceMap'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          'file-loader?name=assets/images/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        test: /\.(mp4|mp3)$/i,
        use: 'file-loader?name=assets/media/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|woff2?)$/i,
        use: 'file-loader?name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.(txt|xml|pdf)$/i,
        use: 'file-loader?name=assets/docs/[name].[ext]'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/pages/index.pug'
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/nosotros.pug',
      filename: 'nosotros.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/servicios.pug',
      filename: 'servicios.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/portafolio.pug',
      filename: 'portafolio.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/blog.pug',
      filename: 'blog.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/contacto.pug',
      filename: 'contacto.html'
    }),
    new MiniCssExtractPlugin({
      filename: './assets/css/main.css'
    }),
    new CopyPlugin([
      { from: './src/.htaccess', to: './'},
      { from: './src/googlecb5100a3fdb1ed75.html', to:'./'}
    ]),
  ]
};
