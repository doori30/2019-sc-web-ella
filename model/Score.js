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
class Score extends Model{}
// Sample.init({테이블정보},{옵션});
Score.init({
	stdname:{
		type: Sequelize.STRING,
		allowNull: false
	},
	kor:{
		type: Sequelize.TINYINT,
		allowNull: true
	},
	math:{
		type: Sequelize.TINYINT,
		allowNull: true
	},
	eng:{
		type: Sequelize.TINYINT,
		allowNull: true
	}//대문자
},{
	//옵션으로 만들어진 거(소문자)
	sequelize,
	modelName: "scores",
	// timestamps: false //데이터 기록을 위해 true기본값을 주는 것이 좋다.
});
Score.sync({force: false});//sync-비동기
//force: true->기본에 테이블이 존재하면 삭제하고 다시 만든다. 절대 쓰면 안됨!!!
// Score.create({
// 	stdname: "홍길동",
// 	kor:95,
// 	math:100,
// 	eng:50
// });

module.exports={Score}