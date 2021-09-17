const request = require('request');

//Promise to get googlehome page
 getGoogleHomePage = () =>{
    return new Promise((resolve, reject) =>{
        request('http://www.google.com',  (error, response, body) => {
            if(error){ // if error  there
                return reject(err);
            }
                resolve(response); // if response is received
        });
    })
};

// creating promise for  function
const promise1 = getGoogleHomePage();
//resolving promise
Promise.resolve(promise1)
.then((result) =>{ //if promise resolved 
    console.log('status code :' ,result && result.statusCode);
    console.log('Body :',result.body);
})
//if face any error in resolving promise
.catch((err)=>console.log(err)); 