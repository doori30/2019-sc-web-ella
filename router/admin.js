const express = require("express");
const router = express.Router();
/* GET */
router.get("/login", getLogin);
router.get("/search", getSearch);
// router.post();
// router.delete();

/* POST */


/* Router cb */
function getLogin(req,res) {
	res.send("Admin Login")
}
function getSearch(req,res) {
	res.send("Admin Search")
}
module.exports = router;