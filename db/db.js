const mongoos = require("mongoose");
const config = require("../config/keys");
monoCFG: {
  useNewUrlParser: true;
}
monoCFG: {
  useNewUrlParser: true;
}
mongoos
  .connect(config.mongoURI, config.monoCFG)
  .catch(() => {
    console.log("no connection", error);
  })
  .then(() => {
    console.log("CONNECTED");
  });
