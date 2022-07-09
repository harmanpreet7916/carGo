const express = require('express');

const router = express.Router();

const Product = require('../models/product');


// Routes
router.get('/', (req, res) => {

    Product.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.get('/name', (req, res) => {
    const data =  {
        username: 'harmanpreet',
        age: 21
    };
    res.json(data);
});



module.exports = router;