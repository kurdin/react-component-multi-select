module.exports = {
  externals: {
    react: 'React'
  },
  debug: false,
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
