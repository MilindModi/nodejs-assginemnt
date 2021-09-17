const express = require('express');
const router = express.Router();
const connection = require('../connection');

const Customer = require('../model/Customer');
//API using transaction
router.post('/add/customer/transaction',async (req,res)=>{
    const t = await connection.transaction();
    try {

        // Then, we do some calls passing this transaction as an option:
        const result = await Customer.findAndCountAll({
            where: { phone : req.body.phone },
        }).catch((error)=>{console.log(error); });
         
        if(result['count'] == 0){ // if no records found new data can be insert
            const result = await Customer.create({
                CustomerName:req.body.customerName,
                phone : req.body.phone,
                password:req.body.password,
                adminId : req.body.adminId
            },{ transaction: t });
          
             await t.commit(); // commiting transaction
             console.log(result);
             res.send(`<h1>Added successfully customer id :  ${result}</h1>`);
             return;
        }else{
            console.log('Phone number already exists');
            await t.rollback();
            res.send('<h1>Phone number already exists</h1>');
            return;
        }
    }catch(error){
        await t.rollback();
        res.send('<h1>Phone number already exists</h1>');
        return;
    };
});

//normal API for insertion
router.post('/add/customer',async (req,res)=>{
 
   const result = await Customer.findAndCountAll({
        where: { phone : req.body.phone },
    }).catch((error)=>console.log(error));

    if(result['count'] == 0){
        const result = await Customer.create({
            CustomerName:req.body.customerName,
            phone : req.body.phone,
            password:req.body.password,
            adminId : req.body.adminId
        });
        console.log(result);
        res.send(`<h1>Added successfully customer id :  ${result}</h1>`);
    }else{
        console.log('Phone number already exists');
        res.send('<h1>Phone number already exists</h1>');
    }
})
module.exports = router;