
// If you finally stumbled in this dark place then again you are in the right place, now carefully read this is not a place to mix something up
 function checkinput(pass){
		if(!document.login.inputEmail.value || !document.login.inputPassword.value){
			alert("Please fill in the required field");
			return false;
		}
 document.login.submit();

}
