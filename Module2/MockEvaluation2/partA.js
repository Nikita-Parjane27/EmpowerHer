//1. spread operator 
let arr1=[10,20,30];
let arr2=[40,50];
let combinedArr=[arr1,arr2];
console.log(combinedArr); 

//2. Spread operator (object)
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
let profile = {person, extra };
console.log(profile);

//3. Rest operator (function parameters)
function sumAll(...numbers) {
    let sum=0;
    for(let num of numbers){
        sum+=num;
    }
    return sum;
}
console.log(sumAll(10, 20, 30, 40,50));

//4. Rest operator (Array destructing)
let numbers = [10,20,30,40,50];
let [a, ...restNumbers] = numbers;
console.log(a, restNumbers);

//5. nested destructing
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
const{
    address:{
        city,
        geo:{lat,lng }
    }
}=user;

//6. converting single arrow functions
function multiply(a, b) {
  return a * b;
}
let multiplyArray=(a,b)=>a*b;
console.log(multiplyArray(5,6));

//7. optimal chaininh
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
console.log(emp.details?.profile?.role);