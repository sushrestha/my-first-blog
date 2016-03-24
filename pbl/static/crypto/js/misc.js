

function doEncrypt(p){
    if (!document.encrypt.plainText.value){
        alert("Please enter the text:");
        return false;       
    }
    else{
         document.encrypt.submit();
        return true;
    }
}
function checkinput(pass){
    if(!document.login.inputEmail.value || !document.login.inputPassword.value){
    			alert("Please fill in the required field");
    			return false;
    		}
        document.login.submit();
        return true;
}