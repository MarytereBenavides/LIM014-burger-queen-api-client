const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@modules': path.resolve(__dirname, "src/modules"),
    }
  }
}