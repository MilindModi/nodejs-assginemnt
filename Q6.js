//get sum of 1 to Nth 
function getSumOfN(n){
    return ((n * ( n + 1)) / 2);
}
//To search for the missing number
function getMissingNumber(numbers){
 let sum = 0;
 let index = -1;
 numbers.forEach((number,i) =>{
     if(number == 0){ // missing number index
         index = i;
     }else{
        sum += number;
     }
 });

 //actual sum from 1 to Nth
 let actualSum = getSumOfN(numbers.length);
 
 // actual - sum is missing number
 console.log(`Missing number is ${actualSum - sum } at index ${index}`);
}

//fill array from 1 to 100 
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
const randomArray = range(1,100);

//generating random index from 1 to 100
const randomIndex = Math.floor(Math.random() * 100 + 1);

//this is expected output for the function
console.log(`Expected output : Missing number is ${randomArray[randomIndex] } at index ${randomIndex}`)

//erasing the random index
randomArray[randomIndex] = 0;

//calling function to search for  missing number
getMissingNumber(randomArray);