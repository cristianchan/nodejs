var account = (function() 
{
	var balance = 0;

	return{
		deposit:function(amount){
			balance += amount;	
		},
		withdraw:function(amount){
			balance -= amount
		},
		getBalance:function(){
			return balance;
		}

	};
})();

account.deposit(1000);
account.withdraw(121);
console.log(account.getBalance());
