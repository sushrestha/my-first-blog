function doSomeTransfer(p){
	var input = document.getElementById('inputAmount').value;
	if (!input || isNaN(input) || parseFloat(input)==0.00 || input.length >4){
		alert("Enter the Amount: $1 to $9,999");
		return false;
	}
	else{
		if(isExceedLimit(input)){
			alert("Please Enter Amount Less Than Limit Value: $9,999");
			return false;
		}
		else{
			document.transfer.submit();
		}
	}
	

}