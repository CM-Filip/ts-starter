const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist') // Directory to serve the files from
    },
    compress: true,
    port: 4200,
    open: true
  }
}