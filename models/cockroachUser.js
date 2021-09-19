const mongoose = require('mongoose')
//CockroachDB
const Sequelize = require("sequelize-cockroachdb");

// For secure connection to CockroachDB
const fs = require('fs');

// Connect to CockroachDB through Sequelize
var sequelize = new Sequelize({
  dialect: "postgres",
  username: "alan",
  password: "haaxEmGrSBlZII6S",
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  port: 26257,
  database: "subsistance-farmer-3652.bank",
  dialectOptions: {
    ssl: {

      //For secure connection:
      ca: fs.readFileSync('certs/cc-ca.crt')
              .toString()
    },
  },
  logging: false,
});


const CockroachUser = sequelize.define("cockroachUser", {
    googleId: {
      type: Sequelize.TEXT,
    },
    displayName: {
      type: Sequelize.TEXT
    },
    image: {
      type: Sequelize.TEXT
    }
});

module.exports = CockroachUser
