//Question 1. Closure-Based Counter Implementation
function createCounter() {
  let count = 0;   
  return {
    increment() {
      count++;
      console.log("Current count:", count);
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    },
    getCount() {
      console.log("Current count:", count);
    }
  };
}
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement();
//Multiple Counters
const counter1 = createCounter();
const counter2 = createCounter();
counter1.increment(); 
counter1.increment(); 
counter2.increment(); 
counter2.decrement(); 

//Question 2.  Simulating Private Variables with Closures
function createBankAccount() {
  let balance = 0;  

  return {
    deposit(amount) {
      balance += amount;
      console.log("Deposited:", amount);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        console.log("Withdrawn:", amount);
      }
    },
    checkBalance() {
      console.log("Current balance:", balance);
    }
  };
}
const account = createBankAccount();
account.deposit(500);   
account.withdraw(200);   
account.withdraw(400);    
console.log(account.balance); 
//Modified Implementation
function createBankAccount() {
  let balance = 0;
  let history = [];   
  return {
    deposit(amount) {
      balance += amount;
      history.push(`Deposited: ${amount}`);
      console.log("Deposited:", amount);
    },
    withdraw(amount) {
      if (amount > balance) {
        history.push(`Failed Withdrawal: ${amount} (Insufficient balance)`);
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        history.push(`Withdrawn: ${amount}`);
        console.log("Withdrawn:", amount);
      }
    },
    checkBalance() {
      console.log("Current balance:", balance);
    },
    getHistory() {
      console.log("Transaction History:", history);
      return history;
    }
  };
}
