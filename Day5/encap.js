class BankAccount {
    #balance = 0;
     
    deposit(amount){
        if (amount >0){
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current Balance:₹${this.#balance}`);
        }else{
            console.log("Deposit amount must be positive.")
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
          console.log(`Withdraw:$${amount}.Current Balance:₹${this.#balance}`);
    }else{
        console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
    }
}
getBalance() {
        return this.#balance;
    }
}
 
const Account = new BankAccount();
Account.deposit(1000);
Account.withdraw(200);
console.log(`Final Balance: ₹${Account.getBalance()}`);
 
const Account2 = new BankAccount();
Account2.deposit(500);
Account2.withdraw(1000);
console.log(`Final Balance: ₹${Account2.getBalance()}`);