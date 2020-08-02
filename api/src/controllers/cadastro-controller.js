'use strict'

exports.get = (req, res) => {
    const fs = require('fs');
    const path = require('path');
    const query = require('url').parse(req.url,true).query;

    let date = new Date()
    let day = ("0" + date.getDate()).slice(-2)
    let month = ("0" + (date.getMonth() + 1)).slice(-2)
    let year = date.getFullYear()
    let date_time = `${year}-${month}-${day}`

    let data = `${query.name},${query.email},${date_time}\n`

    fs.writeFile(
        path.join(__dirname + '/../../../cadastros.txt'), 
        data, 
        {'flag':'a'},  
        (err) => {
            if (err) throw err;
            console.log('Saved!');
        }
    )
    res.status(201).send({"message": `Cadastro efetuado com sucesso`, error: false})
}