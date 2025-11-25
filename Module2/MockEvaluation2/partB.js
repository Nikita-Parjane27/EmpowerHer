//8. inbuid HOF
let nums = [10, 3, 7, 20, 13, 2];
let square= nums.map(num=>num*num);
console.log(square);
function isprime(nums){
    if(nums<2) return false;
    for(let i=2;i<=Math.sqrt(nums);i++){
        if(nums%i===0) return false;
    }
    return true;
}
console.log(nums.filter(isprime));
let sum=nums.reduce((acc,num)=> acc+num,0);
console.log(sum);

let sorted=nums.sort((a,b)=>a-b);
console.log(sorted);

//9. callback functions
function displaycar(){
    console.log("Displaying car information... ");
}
function displayTruck(){
    console.log("Displaying truck information... ");
}
function displayBike(){
    console.log("Displaying bike information... ");
}
function vehicleInfo(vehiclecategory,callbackfun){
    console.log(`Vehicle category is: ${vehiclecategory}`);
    callbackfun();
}
vehicleInfo("Car",displaycar);
vehicleInfo("Truck",displayTruck);
vehicleInfo("Bike",displayBike);