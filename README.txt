## 01-first-app
생활코딩 CRUD 를 이용한 react app 만들기
----0407 Project Done
----CRUD 프로젝트 마무리


## 03-express
(
    https://ndb796.tistory.com/217,
    https://www.youtube.com/watch?v=YO9CqrnxbFU&list=PLRx0vPvlEmdCED62ZIWCbI-6G_jcwmuFB&index=14
)
서버(express)를 이용하여 구축하기
1. client 파일 생성(클라이언트와 서버 분리)
2. 루트 폴더 package.json 파일 생성
3. package.json 파일 작성
{
    "name": "management",
    "version": "1.0.0",
    "scripts": {
        "client": "cd client && yarn start",
        "server": "nodemon server.js",
        "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
    },
    "dependencies": {
        "body-parser": "^1.18.3",
        "express": "^4.16.4"
    },
    "devDependencies": {
        "concurrently": "^4.0.1"
    }
}
4. npm install body-parser express -D concurrenrly 설치
5. gitignore 로 깃 업데이트 예외 처리
6. nodemone 설치 npm i -g nodemone
7. server.js 파일 만들기
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express!' });
});
app.listen(port, () => console.log(`Listening on port ${port}`));

8. 서버 파일 실행 (node server.js)

------------
res api 설정

1. server.js 수정
app.get('/api/customers', (req, res)=>{
    res.send([
        객체 전달(json 으로 반환됨)
    ])
})

2. 클라이언트에 package.js 추가
proxy : "http://localhost:5000"

3. app.js 에서 api값 걸정
3-1 this.sate 값 설정 (customers : "")
3-2 api 값은 
componentDidMount() {
this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
}
에서 처리

3-3 api 호출 함수 만들기
callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
}


##Database 연결
AWS RDNS로 서버 구축


MYsql 연결 파일로 서버 연결

테이블 생성 쿼리문
USE management;

CREATE TABLE CUSTOMER(
	id INT PRIMARY KEY AUTO_INCREMENT,
	image VARCHAR(1024),
	name VARCHAR(64),
	birthday VARCHAR(64),
	gender VARCHAR(64),
	job VARCHAR(64)
) DEFAULT CHARACTER SET UTF8;

데이터 추가 쿼리문
USE management;
INSERT INTO CUSTOMER VALUES (1, 'https://placeimg.com/64/64/1', '김진혁', '811018', '남자', '퍼블리셔');

데이터 베이스 연결
gitignore 에 데이터 베이스 연결 제외 처리 하기
#database 
/database.json

database.json 파일 만들기
{
    "host": "management-tutorial.cbazvjfdx25t.ap-northeast-2.rds.amazonaws.com",
    "user": "user",
    "password": "1998kjhkjh",
    "prot": "3306",
    "database":"management"
}

모듈 설치
npm i -save mysql

server.js 파일 수정

const fs = require('fs');
const data = fs.readFileSync('./database.json');
const mysql = require('mysql');

const conf = JSON.parse(data);
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})

app.get('/api/customers', (req, res)=>{
    connection.query(
        "SELECT * FROM CUSTOMER",
        (err, rows, fields)=>{
            res.send(rows)
        }
    )
})




//Render : componentWillMount > render > componentDidMount
//update : componentWillReceiveProps > shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate
