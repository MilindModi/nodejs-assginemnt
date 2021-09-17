const express = require('express');
const router = express.Router();
const connection = require('../connection');
const Customer = require('../model/Customer');

//normal API for login
router.post('/login',async (req,res)=>{
 
    //finding credentials
    const result = await Customer.findAll({
        attributes: ["customerId","CustomerName","phone"], 
         where: { phone : req.body.phone },
     }).catch((error)=>console.log(error));
     
     if(result.length == 1){
        
         res.send(`<h1>Added successfully customer id :  ${result[0].dataValues.customerId} name : ${result[0].dataValues.CustomerName}</h1>`);
     }else{
         res.send('<h1>Account not exists</h1>');
     }
 })
 module.exports = router;