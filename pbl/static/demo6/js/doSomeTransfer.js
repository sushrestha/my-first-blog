function doSomeTransfer(){
	var input = document.getElementById('inputAmount').value;
	var recep = document.getElementById('to');
	if (!input || isNaN(input) || parseFloat(input)==0.00 || input.length >4){
		alert("Enter the Amount: $1 to $9,999");
	}
	else{
		transferMoney(input);
		// if(isExceedLimit(input)){
		// 	alert("Please Enter Amount Less Than Limit Value: $9,000");
		// }
		// else{
		// 	transferMoney(input);
		// }
		alert(recep.options[e.selectedIndex].value);
	}
	

}