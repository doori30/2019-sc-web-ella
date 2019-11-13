const express = require("express");
const router = express.Router();
const {AdminLogin} = require("../model/AdminLogin");

/* REST */
router.post("/", postData);

/* Rounter CB */
async function postData(req,res) {//저장
	let adminID = req.body.adminID;
	let adminPW = req.body.adminPW;
	let result =	await	AdminLogin.findAll({//select 
		where:{//데이터베이스에 있는 필드명
		adminID,
		adminPW
		}
	});
	res.json(result);
};

module.exports = router;