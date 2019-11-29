//npm i sequelize sequlize-cil mysql mysql2
const Sequelize = require("sequelize");//<script src="../js/fx-slide.js"></script>
//대문자▲ 소문자▼
const sequelize = new Sequelize({
	host: "db.doori30.gabia.io",
	// host: "localhost",
	port: 3306,
	// database:"ella",
	// username:"ella",
	// password:"000000",
	username : "doori30",
	password : "tmdnlxl1004!!",
	database : "dbdoori30",
	dialect:"mysql",
	pool:{
		max:10,
		min:0,
		acquire:30000,
		idle:10000
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

(async()=>{
	try{
	await sequelize.authenticate();
	console.log('Connection has been established successfully.')
	}
	catch(err){
		console.error('Unable to connect to the database:', err);
	}
})();

module.exports ={Sequelize,sequelize}//추출함