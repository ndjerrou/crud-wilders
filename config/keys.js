// what credentials to return ?

if (process.env.NODE_ENV === "production") {
  //production mode
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
