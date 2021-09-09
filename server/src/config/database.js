require('dotenv').config()


module.exports = {
  connection: process.env.DB_CONNECTION,

  pg: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },
    // debug: true
  }
}
