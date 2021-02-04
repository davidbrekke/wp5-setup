const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  output: {
    assetModuleFilename: 'assets/[hash][ext][query]',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        /* alt: asset/resources or asset/inline */
        type: 'asset',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options for importing images in css
            options: { publicPath: '' },
          },
          'css-loader',
        ],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  devtool: 'source-map',

  devServer: {
    contentBase: './dist',
    hot: true,
  },
}
