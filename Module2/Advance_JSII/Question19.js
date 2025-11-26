let age = 25;
function displayAge() {
  console.log("Current age:", age);
}
function changeAge(newAge) {
  age = newAge;
  console.log("Age updated to:", age);
}
console.log("Global and Function Execution Context Demo\n");
console.log("Initial global age:", age);
displayAge();
console.log("\nChanging age:\n");
changeAge(30);
displayAge();
console.log("\nChanging age again:\n");
changeAge(35);
console.log("Final global age:", age);
displayAge();