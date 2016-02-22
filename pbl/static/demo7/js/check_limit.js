
function isExceedLimit(input){
	var limit = 9999;

	if(input <= limit){
		return false;
	}
	else{
		return true;
	}	
}
function transferMoney(input){
	var amountA = 50000;
	var amountB = 50000;

	if(parseFloat(amountA)<parseFloat(input)){
		alert("Insufficient Amount in account!!!");
		return false;
	}
	else{
			newAmountA = parseFloat(amountA) - parseFloat(input);
			newAmountB = parseFloat(amountB) + parseFloat(input);
			if(newAmountB>=amountB && newAmountA<=amountA){
				alert("Money Transferred!! \n Current Balance Summary: \n Amount of A: $"+newAmountA +"\n Amount of B: $"+newAmountB + "\n Try Harder:");
				return false;
			}
			else{

				alert("Successfull !! Money Transferred!! \n Current Balance Summary: \n Amount of A: $"+newAmountA +"\n Amount of B: $"+newAmountB +"\n Congratulations, You completed the level");
				windows.location.href(home);

				// document.login.submit();
			}

	}

}