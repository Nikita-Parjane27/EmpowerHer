//10. simple closure
function counter(){
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
let increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

//11. Medium closure
function createWallet(){
    let balance=0;
    return{
        addmoney:function(amopunt){
            balance+=amopunt;
        },
        checkbalance:function(){
            return balance;
        }
    };
}
let wallet= createWallet();
wallet.addmoney(500);
wallet.addmoney(5000);
console.log(wallet.checkbalance());