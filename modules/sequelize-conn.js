//npm i sequelize sequlize-cil mysql mysql2
const Sequelize = require("sequelize");//<script src="../js/fx-slide.js"></script>
//대문자▲ 소문자▼
const sequelize = new Sequelize({
  host: "ls-933041b199472ed4b7e9d975a30de433220bd814.clv2i0roeqfa.ap-northeast-2.rds.amazonaws.com",
// host: "localhost",
  port: 3306,
// database:"ella",
// username:"ella",
// password:"000000",
  username: "dbmasteruser",
  password: "v%~KGvaPe~m+90;jq5a(9Q{S1vFCHa1[",
  database: "dbmaster",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }//option(접속정보)
});

// sequelize
// 	.authenticate()
// 	.then(() => {
// 		console.log('Connection has been established successfully.');
// 	})
// 	.catch(err => {
// 		console.error('Unable to connect to the database:', err);
// 	});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.')
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
})();

module.exports = {Sequelize, sequelize}//추출함