const express = require("express");
const router = express.Router();
const path =require("path");
const {AdminBanner} = require(path.join(__dirname, "../model/AdminBanner"));
const util = require(path.join(__dirname, "../modules/util")); //나는 상대경로 join은 절대경로
//선언해야 접근가능


/* REST */
router.get("/:type", getData);

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

module.exports = router;