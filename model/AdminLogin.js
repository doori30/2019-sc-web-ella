const {Sequelize, sequelize} = require("../modules/sequelize-conn");

//ES5 class지만 class를 가장한 객체와 같다.(상속X)
//상속받으려면 받아와서 사용가능(참조)
// const User3 = (function(){
	// 	function User3(){
		// 		this.model =new Model(); //extends역활을 한다.
		// 	}
		// 	return User3;
		// })();
		
/* Model 작성 */
const Model = Sequelize.Model;//java객체를 만드는 것과같음.
//ES6(상속o)
//java는 class에 하나의상속을 받을 수 있다.
class AdminLogin extends Model{}
// Sample.init({테이블정보},{옵션});
AdminLogin.init({
	adminID:{
		type: Sequelize.STRING,
		allowNull: false
	},
	adminPW:{
		type: Sequelize.STRING,
		allowNull: false
	},
	grade:{
		type: Sequelize.TINYINT,
		allowNull: false,
		defaultValue: 1 //값을 지정하지 않으면 1로 표시됨.
	},
},{
	//옵션으로 만들어진 거(소문자)
	sequelize,
	modelName: "admins", //HS에 동기화됨
	// timestamps: false //데이터 기록을 위해 true기본값을 주는 것이 좋다.
});
//한번만 하는 과정 (init한 것을 생성해줌./지우고 만들면 true 새로 만들면 false)
//force: true->기본에 테이블이 존재하면 삭제하고 다시 만든다. 절대 쓰면 안됨!!!
// (async()=>{
// 	const result =	await	AdminLogin.sync({force: true});//sync-비동기
// 	AdminLogin.create({
// 		adminID:"doori30",
// 		adminPW:"0000",
// 		grade:9
// 	});
// })();<-주석을 안할 경우 즉시실행();을 지워도된다.
//sync()메서드를 최초한번 실행하여 테이블이 생성되면 주석처리하여 더이상 쓸 필요가 없다.
// AdminLogin.sync({force: false});//sync-비동기
module.exports={AdminLogin}