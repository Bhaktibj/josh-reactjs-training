// Write a function which will accept one object as a parameter with properties (type="credited/debited", amount, balance) and print on the console
// "XXXX amount has been credited/debited from your account, your account balance is XXXX."

let userBalance = 2000;
let type = 3;
let userAmount = 1233;


let credit=(amount,balance)=>{
    return userBalance=amount+balance;
}

let debit=(amount,balance)=>{
    return userBalance=balance-amount;
}

let checkBalance=()=>
{
    return userBalance;
}

switch(type){
    case 1:
        console.log(`${userAmount} has been credited..your total balance is`, credit(userAmount,userBalance))
        break;
    case 2:
        console.log(`${userAmount} has been debited..your available balance is`, debit(userAmount,userBalance))
        break;
    case 3:
        console.log(`Your balance is: ${userBalance}`) 
        break;   
    default:
        console.log("Invalid choice")         
}



