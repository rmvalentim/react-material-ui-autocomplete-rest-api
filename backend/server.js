const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data');
const PORT = 3001;

app.use(cors());

app.get('/:descricao', (req, res) => {

    let result = [];

    data.forEach(item => {
        if((item.Codigo + ' ' + item.Descricao).includes(req.params.descricao)) {
            result.push(item);
        }
    })
    res.send(result);
});

app.listen(PORT, () => {
    console.log(`Server listen on port ${3001}`);
});