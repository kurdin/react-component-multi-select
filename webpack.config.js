module.exports = {
  externals: {
    react: 'react',
    'react/addons': 'react'
  },
  debug: false,
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader'}
    ]
  }
};
