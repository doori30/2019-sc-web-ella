const express = require("express");
const router = express.Router();
const {Score} = require("../model/Score");

/* REST */
router.get("/", getData);
router.post("/", postData);
router.put("/", putData);
router.delete("/", deleteData);

/* Rounter CB */
async function getData(req,res) {
	let result = await Score.findAll({
		order: [["id","DESC"]]
	});
	res.render("rest/seqForm.pug",{datas: result});
}

async function postData(req,res) {//저장
	let result =	await	Score.create({
		stdname: req.body.stdname,
		kor: req.body.kor,
		math: req.body.math,
		eng: req.body.eng
	});//단점 느림
	res.redirect("/rest-seq");
};

async function putData(req,res) {//수정
	// Score.update({data},{where});
	Score.update({
		stdname: req.body.stdname,
		kor:req.body.kor,
		math:req.body.math,
		eng:req.body.eng
	},{
		where:{
			id: req.body.id
		}
	});
	res.redirect("/rest-seq");
};

async function deleteData(req,res) {//삭제
	let result =	await Score.destroy({
		where:{
			id: req.body.id
		}
	});
	res.json(result);
};
module.exports = router;