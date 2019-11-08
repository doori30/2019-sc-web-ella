/* Express 구현 */
const express = require("express");
const app = express();
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

/* node_modules */
const path = require("path");
const fs = require("fs"); //filesystem← ↑
const morgan = require("morgan");//(log폴더)
const bodyParser = require("body-parser");
const methodOverride = require('method-override');//method를 덮어씌여서 인식시킴.

/* modules */


/* Express 설정 */
app.locals.pretty = true;
app.use("/", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended : true}));
//app.use(bodyParser.urlencoded({속성안넣어도가능}));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

/* method-override 설정  */
app.use(methodOverride('X-HTTP-Method')) //Microsoft
app.use(methodOverride('X-HTTP-Method-Override')) 
// Google/GData
app.use(methodOverride('X-Method-Override')) //IBM
app.use(methodOverride(function (req, res) {
	if (req.body && typeof req.body === 'object' && '_method' in req.body) {
		var method = req.body._method
		delete req.body._method
		return method
	}
}));

/* morgan 설정 */
// create a write stream (in append mode)
//log/access.log 저장
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));


/* router - ella */
const frontRouter = require("./router/front");
const adminRouter = require("./router/admin");
const apiRouter = require("./router/api");
app.use("/", frontRouter);
app.use("/admin", adminRouter);
app.use("/api", apiRouter);


/* router - rest */
const sqlRouter = require("./router/rest-sql");
const ajaxRouter = require("./router/rest-ajax");
const seqRouter = require("./router/rest-seq");

app.use("/rest-sql", sqlRouter);
app.use("/rest-ajax", ajaxRouter);
app.use("/rest-seq", seqRouter);
