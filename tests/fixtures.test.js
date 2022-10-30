require('dotenv').config()
const connectDb = require('./database')
const { status, config, database, up } = require('migrate-mongo')
const { migrateMongoConfig } = require('./migrate-mongo-config')

exports.mochaGlobalSetup = async function () {
  console.log('mochaGlobalSetup')
  try {
    console.log('connecting to test db...')
    await connectDb()
    console.log('Connected to db successfully.')
    config.set(migrateMongoConfig)
    const { db } = await database.connect()
    const migrationStatus = await status(db)
    if (migrationStatus.some((m) => m.appliedAt === 'PENDING')) {
      console.log('Running Migrations')
      await up(db)
      console.log('Migrations executed.')
    }
  } catch (error) {
    console.log('Failed to connect to db', error.message)
  }

  after(() => {
    console.log('Testing completed')
  })
}
