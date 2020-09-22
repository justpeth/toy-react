module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'ToyReact.createElement' }]]
            // plugins: ['@babel/plugin-transform-react-jsx']
          }
        }
      },
    ]
  },
  mode: 'development',
  optimization: {
    minimize: false
  }
}