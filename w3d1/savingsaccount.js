class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this.interest = interest;
    }

    getInterest() {
        return this._interest;
    }
    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {
        let calculatedInterest = this._balance * this._interest / 100;
        this._balance += calculatedInterest;
        return calculatedInterest;
    }

    endOfMonth() {
        this.addInterest();
        return "Interest added " + this.toString();
    }

    toString() {
        return "SavingsAccount " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }

}