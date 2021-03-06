const path = require('path');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          Apollo: path.resolve(__dirname, 'src/apollo'),
          Components: path.resolve(__dirname, 'src/components'),
          Pages: path.resolve(__dirname, 'src/pages'),
          Styles: path.resolve(__dirname, 'src/styles'),
          Utils: path.resolve(__dirname, 'src/utils')
        }
      }
    ]
  ]
};
