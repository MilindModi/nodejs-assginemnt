const connection = require("./connection");
//data tobe inserted
 const customers = [{
    email : "anurag11@yopmail.com" ,
    name : "anurag"
    },
    {
    email : "sameer11@yopmail.com" ,
    name : "sameer"
    },
    {
    email : "ravi11@yopmail.com" ,
    name : "ravi"
    },
    {
    email : "akash11@yopmail.com" ,
    name : "akash"
    },
    {
    email : "anjali11@yopmail.com" ,
    name : "anjai"
    },
    {
    email : "santosh11@yopmail.com" ,
    name : "santosh"
    },
    {
    email : "ravi11@yopmail.com" ,
    name : "Milind"
    },
]

//inserting promise

insert = (email,name) =>{
    var sql = `INSERT INTO customer(name1,email) values('${name}','${email}') ON DUPLICATE KEY UPDATE name1='${name}'`;
    console.log(sql);
    return new Promise((resolve, reject)=>{
        connection.query(sql,  (error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
};

//function to insert data array
async function insertCustomer(customers) {
    
    //looping through each data
    customers.forEach(async (customer,index)=>{
        
        const promise1 = insert(customer.email,customer.name);
        try{
            await Promise.resolve(promise1).then(async result=>{
                if(result['affectedRows'] > 1){ // if new record inserted 
                    console.log(`${index} record updated successfully `);

                }else{ // if record updated
                    console.log(`${index} record inserted successfully `);
                }
            });
            } 
            catch(error){
                console.log(error)
            }
});
}
insertCustomer(customers);
connection.end();