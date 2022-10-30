const mongoose = require('mongoose')
const TEST_DB_URL = process.env.TEST_MONGODB_URI

module.exports = async () => {
  if (!TEST_DB_URL) {
    throw new Error('Test database connection url missing in the env.')
  }
  console.log('Connecting to test db ', TEST_DB_URL)
  return mongoose.connect(TEST_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
