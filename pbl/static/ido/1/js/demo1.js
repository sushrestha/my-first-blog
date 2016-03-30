// If you finally stumbled in this dark place then again you are in the right place, now carefully read this is not a place to mix something up
 function checkinput(pass){
		if(!document.login.inputEmail.value || !document.login.inputPassword.value){
			alert("Please fill in the required field");
			return false;
		}
                if(document.login.inputPassword.value == "s"+"12345678"){
                alert("Congratulations, you have completed the level 1.");
                window.location.href = "../index.html";
			return true;
                }
                else
                {
                alert("Try Harder");
		return false;

                }

}
