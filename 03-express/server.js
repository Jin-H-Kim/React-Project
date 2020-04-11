const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/api/hello' , (req, res) => {
//     res.send({message: 'Hello Express!'})
// })

app.get('/api/customers', (req,res) => {
    res.send([
        {
            id : 1,
            img : 'https://placeimg.com/64/64/1', 
            name : '김진혁',
            birthday : '811018',
            gender : '남자',
            job : '퍼블리셔'
        },
        {
            id : 2,
            img : 'https://placeimg.com/64/64/2', 
            name : '한경헌',
            birthday : '810505',
            gender : '남자',
            job : '대출 상담'
        },
        {
            id : 3,
            img : 'https://placeimg.com/64/64/3', 
            name : '김태희',
            birthday : '801224',
            gender : '여자',
            job : '배우'
        }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));