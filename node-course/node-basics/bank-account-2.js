var accounts = [];//arreglo de cuentas de banco
function Account(balances,usernames)
{
	var balance = balances;
	var username = usernames;

	this.deposit = function(amount)
	{
		balance += amount;
	};
	this.withdraw = function (amount)
	{
		balance -= amount;
	};
	this.getBalance = function ()
	{
		return balance;
	};
}

Account.prototype = {
	createAccount:function(){
		//var Account = new Account(balance,username);
		accounts.push(this);
	}
}


var account1 = new Account(0,'cchan');
account1.createAccount();
account1.deposit(1000);
var account2 = new Account(0,'jchan');
account2.createAccount();
account2.deposit(1200);
var account3 = new Account(0,'shernandez');
account3.createAccount();
account3.deposit(3000);
account1.withdraw(500);
console.log(account2.getBalance());

