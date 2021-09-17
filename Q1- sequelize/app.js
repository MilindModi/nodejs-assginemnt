const express= require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended :true}));

//routers
const adminRoutes = require('./admin/route');
const customerRoutes = require('./customer/route');

//routing
app.use('/admin',adminRoutes);
app.use('/customer',customerRoutes);

//listening on port
let port= 3000;
 app.listen(port,(err)=>{
     if(err) { console.log('Something went wrong');}
     console.log(`listing on ${port} `);
 })
