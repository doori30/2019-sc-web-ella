const express = require("express");
const router = express.Router();
//참조해서 가져옴.

/* Get */
router.get("/ban/main", getBanMain);

/* Post */


/* Router CB */
function getBanMain(req,res){
	res.send("메인배너");
}

module.exports = router;