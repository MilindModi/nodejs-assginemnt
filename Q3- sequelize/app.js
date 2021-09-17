const Customer = require('./model/Customer');
//data to be inserted
 const customers = [{
    email : "anurag11@yopmail.com" ,
    name1 : "anurag"
    },
    {
    email : "sameer11@yopmail.com" ,
    name1: "sameer"
    },
    {
    email : "ravi11@yopmail.com" ,
    name1 : "ravi"
    },
    {
    email : "akash11@yopmail.com" ,
    name1 : "akash"
    },
    {
    email : "anjali11@yopmail.com" ,
    name1 : "anjai"
    },
    {
    email : "santosh11@yopmail.com" ,
    name1 : "santosh"
    },
    {
    email : "ravi11@yopmail.com" ,
    name1 : "Milind"
    },
];

//function to insert in database
async function insertCustomer(customers) {
    
    //inserting in bulk from array
    Customer.bulkCreate(customers,{
        fields:["email", "name1"] ,
        updateOnDuplicate: ["name1"] 
    });
}
insertCustomer(customers);