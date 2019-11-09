module.exports = {
  mongoURI: "mongodb://FINZ:FINZ@finz-shard-00-00-0pho2.mongodb.net:27017",

  monoCFG: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    replicaSet: "FINZ- shard - 0",
    authSource: "admin",
    retryWrites: true
  }
};
