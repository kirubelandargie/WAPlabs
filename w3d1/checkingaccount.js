class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this.overdraft = overdraft;
    }

    getOverdraft() {
        return this._overdraft;
    }

    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance + Math.abs(this._overdraft)) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    endOfMonth() {
        if (this._balance < 0) {
            return "Warning, low balance " + this.toString();
        } else {
            return "";
        }
    }

    toString() {
        return "CheckingAccount " + this._number + ": balance " + this._balance + ": overdraft limit " + this._overdraft;
    }
}