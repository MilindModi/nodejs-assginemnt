const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.post('/login',(req,res)=>{
    //login in customer 
    connection.query(`SELECT * from customer where phone like ${req.body.phone} and password like ${req.body.password}`  , function (error, results, fields) {
        if (error) {console.log(error);throw error;}
        else if(results.length == 1){ // if result has 1 length than credentials are correct
            console.log(results);
            res.send(`<h1>Logged in  successfully customer id :  ${results[0].customerId} Name : ${results[0].CustomerName}</h1>`);
            return;
        
    }else{ // credentials  are incorrect
        console.log('Phone number already exists');
        res.send('<h1>Phone no. or password might be wrong</h1>');
        return;
    }
    })
});

module.exports = router;