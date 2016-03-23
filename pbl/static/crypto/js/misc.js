function doEncrypt(p){
    if (!document.encrypt.plainText.value){
        document.encrypt.submit();
    }
    else{
        alert("Please enter the text:");
        return false;
    }
}
function checkinput(pass){
if(!document.login.inputEmail.value || !document.login.inputPassword.value){
			alert("Please fill in the required field");
			return false;
		}
    document.login.submit();
}