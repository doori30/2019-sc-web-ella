const express = require("express");
const router = express.Router();
const {AdminBanner} = require("../model/AdminBanner");
//참조해서 가져옴.

/* Get */
router.get("/ban/main", getBanMain);

/* Post */


/* Router CB */
async function getBanMain(req,res){
	let result = await AdminBanner.findAll({
		oreder : [["id","asc"]],
		where : {position:"top"}
	});
	res.json(result);
}

module.exports = router;