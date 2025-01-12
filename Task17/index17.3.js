class BankAccount {
    constructor(a) {
        this.a = a;
    }

    getBalance() {
        return this.a;
    }
    deposit(b) {
        this.b = b;
        return this.a += b;
    }
    withdraw(b) {
        this.b = b;
        return this.a -= b;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300