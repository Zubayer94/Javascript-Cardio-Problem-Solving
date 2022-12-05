"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error("Invalid value");
        this._balance = value;
    }
}
let account = new Account(1, 'Zubayer', 0);
account.deposit(100);
console.log(account.deposit);
account.balance = 1;
console.log(typeof account);
console.log(account instanceof Account);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Zubayer';
seats.A2 = 'John';
seats['A3'] = 'Mosh';
class Ride {
    start() { Ride._activeRides++; }
    end() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log('activeRides', Ride.activeRides);
//# sourceMappingURL=oop.js.map