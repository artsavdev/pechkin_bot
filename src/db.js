const mongoose = require('mongoose')
mongoose.Promise = Promise

module.exports = () => {
  const oprtions = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    autoIndex: process.env.NODE_ENV !== 'production',
    dbName: process.env.DB_NAME
  }
  
  return mongoose.connect(process.env.DB_URL, oprtions)
}