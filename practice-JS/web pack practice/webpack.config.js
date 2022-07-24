const path = require(`path`);

module.exports = {
  mode: `produntion`,
  entry: `./src/webpack.js`,
  output: {
    path: path.resolve(__dirname, `dist`),
    filename: `bundle.js`,
  },
};
