module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-custom-media'),
    require('postcss-simple-vars')({ silent: true })
  ]
};

