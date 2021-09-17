const express = require('express');
const router = express.Router();
const connection = require('../connection');


//API using transaction
router.post('/add/customer/transaction',(req,res)=>{
    //connection 
    connection.beginTransaction(function(err) {
        if (err) { throw err; }
        //simple sql query construction for insertion
        var sql = `INSERT INTO customer(customerName,phone,password,adminId) values('${req.body.customerName}','${req.body.phone}','${req.body.password}',${req.body.adminId})`;
        connection.query(sql, function (error, results, fields) {
            //rollback to previous state if any error occurs
            if (error) {
              return connection.rollback(function() {
                throw error;
              });
            }
            //checking the count if inserted multiple times 
            connection.query(`SELECT count(*) as count from customer where phone like ${req.body.phone}`, function (error, results1, fields) {
                if (error) {
                  return connection.rollback(function() {
                    throw error;
                  });
                }

                //rollback if more than 1 times phone number repeated
                if(results1[0]['count'] > 1){
                  return connection.rollback(function() {
                      res.send('<h1>Phone number already exists</h1>');
                  });
                }
                //committing data 
                connection.commit(function(err) {
                    if (err) {
                        return connection.rollback(function() {
                            throw err;
                        });
                    }
                    res.send(`<h1>Added successfully customer id :  ${results.insertId}</h1>`);
                })
            });

        });
    })
});

//normal API for insertion
router.post('/add/customer',(req,res)=>{

    //checking before insertion if phone number is exists already or not
    connection.query(`SELECT count(*) as count from customer where phone like ${req.body.phone}`  , function (error, results, fields) {
        if (error) {console.log(error);throw error;}
        
        //if phone no. is not registered  insert data
        else if(results[0]['count'] == 0){
            var sql = `INSERT INTO customer(customerName,phone,password,adminId) values('${req.body.customerName}','${req.body.phone}','${req.body.password}',${req.body.adminId})`;
            connection.query(sql, function (error, results, fields) {
                if(error) { console.log('Something went wrong' + error);}
                else{
                    console.log(results);
                    res.send(`<h1>Added successfully customer id :  ${results.insertId}</h1>`);
                    return;
                }
              
            });
        }else {
            //if already registered
            console.log('Phone number already exists');
            res.send('<h1>Phone number already exists</h1>');
            return;
        }
    })
});

module.exports = router;