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
router.delete("/:type", deleteData);
router.put("/:type", putData);

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
			let result;
			if(req.query.id){
				result = await AdminBanner.findOne({
					where:{id : req.query.id}
				});
				res.json(result);
			}
			else{
				result = await AdminBanner.findAll({
					order:[["id","desc"]],
				});
				vals.lists = result;
				res.render("admin/bannerTop",vals);
			}
			// res.json(result);
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
	let result = await AdminBanner.create({
		 	title, position, link, desc, src
		 });
	res.redirect('/admin/banner/top'+type);
	// switch(type) {
	// 	case "top":
	// 		// let result = await AdminBanner.create({
	// 		// 	title, position, link, desc, src
	// 		// });
	// 		// res.json(result);
	// 		res.redirect("/admin/banner/top");
	// 		break;
	// 	case "bottom":
	// 		break;
	// 	default:
	// 		next();
	// 		break;
	// }
}


async function deleteData(req,res,next){
	let type = req.params.type;
	let id = req.body.id;
	try{
	let result = await AdminBanner.destroy({where:{id}});
	// res.json(result);
	res.redirect('/admin/banner/top'+type);
	}
	catch(error){
		next(error);
	}
}

async function putData(req,res,next){
	res.send('저장 되었습니다.');
}

module.exports = router;