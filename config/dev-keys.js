module.exports = {
  mongoURI:
    "mongodb+srv://FINZ:1111@finz-0pho2.mongodb.net/dis?retryWrites=true&w=majority",

  monoCFG: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    replicaSet: "FINZ- shard - 0",
    authSource: "admin",
    retryWrites: true,
    dbName: "Products"
  }
};
