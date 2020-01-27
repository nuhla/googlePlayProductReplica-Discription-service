module.exports = {
  mongoURI: process.env.DATA_PATH,

  monoCFG: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    replicaSet: 'FINZ- shard - 0',
    authSource: 'admin',
    retryWrites: true,
    dbName: 'Products'
  }
};
