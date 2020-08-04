class Bank {


    constructor() {
        this._accounts = [];
    }
    static nextNumber = 0;

    addAccount() {
        let account = new Account(Bank.nextNumber);
        this._accounts.push(account);
        Bank.nextNumber++;
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        let savingsAccount = new Account(Bank.nextNumber, interest);
        this._accounts.push(savingsAccount);
        Bank.nextNumber++;
        return savingsAccount.getNumber();
    }

    addCheckingAccount(overdraft) {
        let checkingAccount = new Account(Bank.nextNumber, overdraft);
        this._accounts.push(checkingAccount);
        Bank.nextNumber++;
        return checkingAccount.getNumber();
    }

    closeAccount(number) {
        this._accounts = this._accounts.filter(function(account) {
            return account.number !== number;
        });
    }

    endOfMonth() {
        let endOfMonthReport = "";
        this._accounts.forEach(account => {
            endOfMonthReport + account.endOfMonth();
        })
        return endOfMonthReport;
    }

    toString() {
        let accounts = "";
        this._accounts.forEach(account => {
            accounts += account + "\n";
        });
        return accounts;
    }

}