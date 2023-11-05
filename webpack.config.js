const path = require(`path`);

module.exports = {
  mode: `development`, // or 'production'
  entry: `./resources/scripts/index.js`,
  output: {
    filename: `main.js`,
    path: path.resolve(__dirname, `dist`),
  }
};