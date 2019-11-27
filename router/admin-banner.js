const express = require("express");
const router = express.Router();
const mt = require("../modules/multer-conn");
const path = require("path");
const { AdminBanner } = require(path.join(__dirname, "../model/AdminBanner"));
const util = require(path.join(__dirname, "../modules/util"));; //나는 상대경로 join은 절대경로
//선언해야 접근가능


/* REST */
router.get("/:type", getData);
router.post("/:type", mt.upload.single("src"), postData);
//											bannerTop.pug첨부이미지

/* Rounter CB */
async function getData(req,res,next) {
	let type = req.params.type;
	let vals = {
		leftNavs:[
			{
				link:"/admin/banner/top",
				title:"상단배너관리"
			},
			{
				link:"/admin/banner/bottom",
				title:"하단배너관리"
			}
		]
	}
	switch(type){
		case "top":
			let result = await AdminBanner.findAll({
				order:[["id","desc"]],
			})
			// res.json(result);
			vals.lists = result;
			res.render("admin/bannerTop",vals);
			break;
		case "bottom":
			res.render("admin/bannerBottom",vals);
			break;
		default:
			next();
			break;
	}
};

async function postData(req, res, next) {
	let type = req.params.type;
	let title = req.body.title;
	let position = req.body.position;
	let link = req.body.link;
	let desc = req.body.desc;
	let src = "";
	if(req.file) src = req.file.filename;

	switch(type) {
		case "top":
			let result = await AdminBanner.create({
				title, position, link, desc, src
			});
			// res.json(result);
			res.redirect("/admin/banner/top");
			break;
		case "bottom":
			break;
		default:
			next();
			break;
	}
}


module.exports = router;