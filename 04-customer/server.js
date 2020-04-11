const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get('/api/hello', (req,res)=>{
    res.send({message: 'Hello express!!'})
})
app.get('/api/customers', (req,res)=>{
    res.send([
        {
            id: 1,
            image: "https://placeimg.com/64/64/1",
            name: "김진혁",
            birthday: "811018",
            gender: "남자",
            job: "Front-end Developer"
        },
        {
            id: 2,
            image: "https://placeimg.com/64/64/2",
            name: "한지민",
            birthday: "810505",
            gender: "여자",
            job: "배우"
        },
        {
            id: 3,
            image: "https://placeimg.com/64/64/3",
            name: "김연아",
            birthday: "20001224",
            gender: "여자",
            job: "피겨스케이트 선수"
        }
    ])
})
app.listen(port, ()=>{
    console.log(`Listing on port ${port}`);
})