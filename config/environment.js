const path = require("path");
const development = {
  name: "development",
  asset_path: path.join(__dirname, "./../public"),
  session_key: "blahsomething",
  db: "facebook",
  
};

const production = {
    name : 'production',
}

module.exports = {
    development,
    production
}