function validation()
{
	var message = "";
	var adding;

	message = message.concat(usrName());
	message = message.concat(checkEmails());
	message = message.concat(passStrength());
	message = message.concat(names());
	message = message.concat(bDay());

	if(message == ""){
		alert("You have made a successful submission of the form.");
	} else {
		alert(message);
		return false;
	}
}

function checkEmails()
{
	var result = "";
	var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var email = document.getElementById('usrEmail').value;
	var emailCon = document.getElementById('usrEmailCon').value;
	if(!email.match(reg))
	{
		result = "Email: This email is not valid!\n";
	}
	if(email != emailCon)
	{
		result = result.concat("Email Confirmation: The emails do not match!\n");
	}
	return result;
}

function passStrength()
{
	var reg = /((?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&'*-+])[^ ]{6,14}$)/;
	var pass = document.getElementById('usrPass').value;
	var passCon = document.getElementById('usrPassCon').value;
	var result = "";
	if(!pass.match(reg))
	{
		result = "Password: Your password must have at least 6 characters with one uppercase letter, one lowercase letter, a number, and a special character\n";
	}
	if(pass != passCon)
	{
		result = result.concat("Password Confirmation: Your passwords must match.\n");
	}
	return result;
}

function usrName()
{
	var reg = /^(?=.{6,20}$)(?![_\\/.<>])(?!.*[_.]{2})[a-zA-Z0-9._]+(?![_.\\/<>])$/;
	var name = document.getElementById('usrAlias').value;
	if(!name.match(reg)){
		return "Username: UserName must be at least 6 characters with no \\, /, <, > symbols\n";
	}
	return "";
}

function names()
{
	var reg = /^([A-Z]{1,2})[a-z]+([A-Z]?)[a-z]+$/;
	var first = document.getElementById('usrFName').value;
	var last = document.getElementById('usrLName').value;
	var mid = document.getElementById('usrInitial').value;
	if(!first.match(reg) || !last.match(reg) || !mid.match(/^[A-Z]{1}$/))
	{
		return "Names: The names you entered are not valid\n";
	}
	return "";
}

function bDay()
{
	reg = /^[0-1]?[0-9]{1}\/[0-3]?[0-9]{1}\/[1-2]{1}[0-9]{3}$/;
	var day = document.getElementById("usrBDay").value;
	if(!day.match(reg))
	{
		return "Birth Date: Your birthday is not formatted correctly\n";
	}
	return "";
}