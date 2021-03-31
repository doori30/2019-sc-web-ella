const mysql = require("mysql2/promise");
//async await가져오기 위해 promise사용
const pool = mysql.createPool({
	host : "ls-933041b199472ed4b7e9d975a30de433220bd814.clv2i0roeqfa.ap-northeast-2.rds.amazonaws.com",
	port : 3306,
	user : "dbmasteruser",
	// user : "ella",
	password : "v%~KGvaPe~m+90;jq5a(9Q{S1vFCHa1[",
	// password : "000000",
	database : "dbmaster",
	// database : "ella",
	connectionLimit : 10, 
	//동접자를 처리하기위해(사용량에 따라 늘리고 줄이기)
	waitForConnections : true //객체를 돌려줄 때까지 기다림.
//   host: "ls-933041b199472ed4b7e9d975a30de433220bd814.clv2i0roeqfa.ap-northeast-2.rds.amazonaws.com",
//   port: 3306,
//   user: "dbmasteruser",
// // user : "ella",
//   password: "v%~KGvaPe~m+90;jq5a(9Q{S1vFCHa1[",
// // password : "000000",
//   database: "dbmaster",
// // database : "ella",
//   connectionLimit: 10,
// //동접자를 처리하기위해(사용량에 따라 늘리고 줄이기)
//   waitForConnections: true //객체를 돌려줄 때까지 기다림.
});

/* async await하기전 */
/* const sqlExec = (sql,sqlVals)=>{
pool.getConnection((error, connect)=>{
	if(error) console.log(error);
	else {
		connect.query(sql,sqlVals,(error,result)=>{
			if(error) console.log(error);
			else console.log(result);
		})
	}
});
}; */

/* async await 적용 */
const sqlExec = async (sql, sqlVals) => {
  try {
    const connect = await pool.getConnection();
    //지정한 10개 중 하나를 가져옴
    const result = await connect.query(sql, sqlVals);
    connect.release(); //돌려주지 않으면 계속 오류가남.
    return result;
  } catch (error) {
    // console.log(error);
    connect.release();
    throw new Error(error);
  }
};


module.exports = {mysql, sqlExec};