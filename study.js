//서버구동
const  express = require("express");
const app = express();
app.listen (3001, ()=> {
console.log("http://127.0.01:3001");
}); 


//[JS]문자열을 배열로, 배열을 문자열로
 str = "010-6299-5337";
var tel = str.split("-");
var str2= tel.join("-"); //"010-8332-8040" <--tel
console.log(str2); 
// tel = 010;
// tel = 6299;
// tel = 5337;

//[express]의 path에 대해 알아보자