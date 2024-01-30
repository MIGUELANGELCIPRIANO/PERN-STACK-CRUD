const { config } = require('dotenv')
config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

module.exports = {
	db: {
		user: `${DB_USER}`,
		password: `${DB_PASSWORD}`,
		host: `${DB_HOST}`,
		port: `${DB_PORT}`,
		database: `${DB_NAME}`,
	},
}
