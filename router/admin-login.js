const express = require("express");
const router = express.Router();
const path =require("path");
const {AdminLogin} = require(path.join(__dirname, "../model/AdminLogin"));
const util = require(path.join(__dirname, "../modules/util")); //나는 상대경로 조인은 절대경로
//선언해야 접근가능


/* REST */
router.post("/", postData);

/* Rounter CB */
//req,res app이가지는 전연변수
async function postData(req,res,next) {//저장
	let adminID = req.body.adminID;
	let adminPW = req.body.adminPW;
	let result =	await	AdminLogin.findAll({//select 
		where:{//데이터베이스에 있는 필드명
		adminID,
		adminPW
		}
	});
	if(result.length == 1 && result[0].grade > 1)
		res.render("admin/main.pug")//views
	else res.send(util.alertAdmin());
	// res.json(result);//결과값
};

module.exports = router;