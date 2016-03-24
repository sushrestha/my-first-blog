






































function checkinput(pass){
		if(!document.login.inputEmail.value || !document.login.inputPassword.value){
			alert("Please fill in the required field");
			return false;
		}
		else{
			document.login.submit();
		}
}
