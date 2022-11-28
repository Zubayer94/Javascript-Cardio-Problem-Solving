"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
}
let account = new Account(1, 'Zubayer', 0);
account.deposit(100);
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=oop.js.map