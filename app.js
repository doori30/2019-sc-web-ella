//모듈 Require
const express = require("express");
const app = express();
const path = require("path"); //경로를 조합해줌
app.listen(3000, ()=>{
	console.log("http://127.0.0.1:3000");
});
//app.use("/", express.static("./public"));
app.use("/", express.static(path.join(__dirname, "./public")));


//사용자 모드 Require

//초기Express 설정
app.locals.pretty = true; 
app.use("/", express.static(path.join(__dirname, "./public")));
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));

//관리자 Router
app.get(["/admin/:type","/admin"],(req,res)=>{
	let type = req.params.type ? req.params.type : "login";
	switch(type){
		case "login":
			adminLogin(req,res);
			break;
		default:
			res.send("페이지를 찾을 수 없습니다.")
			break;
	}
});

function adminLogin(req,res) {
	res.render("admin/login");
}