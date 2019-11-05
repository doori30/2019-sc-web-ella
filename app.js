/* Express 구현 */
const express = require("express");
const app = express();
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

/* node_modules */
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");

/* modules */


/* Express 설정 */
app.locals.pretty = true;
app.use("/", express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

/* morgan 설정 */
// create a write stream (in append mode)
//log/access.log 저장
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'log/access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))


/* router */
const frontRouter = require("./router/front");
const adminRouter = require("./router/admin");
const sqlRouter = require("./router/rest-sql");
app.use("/", frontRouter);
app.use("/admin", adminRouter);
app.use("/rest-sql", sqlRouter);
