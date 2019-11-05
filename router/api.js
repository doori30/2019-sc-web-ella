const express = require("express");
const router = express.Router();
/* Get */
router.get("/ban/main", getBanMain);

/* Post */


/* Router CB */
function getBanMain(req,res){
	res.send("메인배너");
}

module.export = router;