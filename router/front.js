const express = require("express");
const router = express.Router();
/* GET */
router.get("/login", getLogin);
router.get("/search", getSearch);

/* POST */


/* Router cb */
function getLogin(req,res) {
	res.send("Front Login")
}
function getSearch(req,res) {
	res.send("Front Search")
}
module.exports = router;