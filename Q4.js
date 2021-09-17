const person = {
    id : 2 ,
    gender : 'mail'
    };
const student = {
    name : "ravi" ,
    email :"ravi11@yopmail.com"
};

const combine = Object.assign(person,student);
// const combine = {...person , ...student};

console.log(combine );
