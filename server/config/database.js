const sequelize = require('sequelize')
const config = require('./config.json')

const env = process.env.NODE_ENV || "development";
const dbconfig = config[env];

const database = new sequelize(
    dbconfig.database,
    dbconfig.username,
     dbconfig.password,
     {
    host: dbconfig.host,
     dialect: dbconfig.dialect
    }
);

database.authenticate()
.then(() => {
console.log('database connected successfully');
})
.catch((error) =>{ 
    console.error("error message:", error)
});

module.exports = database;