const express = require("express");
const app = express();
const path = require("path"); //경로를 조합해줌
app.listen(3000, ()=>{
	console.log("http://127.0.0.1:3000");
});
//app.use("/", express.static("./public"));
app.use("/", express.static(path.join(__dirname, "./public")));

