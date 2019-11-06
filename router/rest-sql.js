const express = require("express");
const router = express.Router();

const {mysql,sqlExec} = require("../modules/mysql-conn");
//    전역변수로 들어감.


/* REST */
router.get("/", getData);
router.post("/sql", postData);
router.put("/sql", putData);
router.delete("/sql", deleteData);

/* Router cb */
// function getData(req,res) {
// 	(async ()=>{
// 		let sql ="SELECT * FROM rest ORDER BY id DESC";
// 		let result = await sqlExec(sql);
// 		//res.json(result[0]);
// 		res.render("rest/restForm",{users: result[0]});
// 			//									객체안에 배열이 들어감. 
// 	})();
// 	//pug를 불러옴
// }
async function getData(req,res) {
		let sql ="SELECT * FROM rest ORDER BY id DESC";
		let result = await sqlExec(sql);
		//res.json(result[0]);
		res.render("rest/restForm",{users: result[0]});
			//									객체안에 배열이 들어감. 
	//pug를 불러옴
}

async function postData(req,res) {//저장
	let username = req.body.username;
		let sql = "INSERT INTO rest SET username=?";
		let sqlVals = [username];
		let result = await sqlExec(sql,sqlVals);
		res.redirect("/rest-sql");
		//주소가->클라이언트로 다시 응답하여 결과를 줌
};

async function putData(req,res) {//수정
		let sql = "UPDATE rest SET username=? WHERE id=?";
		//id=?인 것의 username을 바꿔줘
		let sqlVals = [req.body.username, req.body.id];
		let reult = await sqlExec(sql, sqlVals);
		res.redirect("/rest-sql");
	// res.send("putData")
};

async function deleteData(req,res) {//삭제
	// res.send("deleteData");
		let sql = "DELETE FROM rest WHERE id=?";
		let sqlVals = req.body.id;
		let result = await sqlExec(sql, sqlVals);
		// console.log(result[0]);
		(result[0].affectedRows > 0)? res.json({code:200}): res.json({code:500});
};
module.exports = router;