function validation()
{
	var message = "";
	var adding;

	message = message.concat(checkEmails());
	message = message.concat(passStrength());
	message = message.concat(names());

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
		result = result.concat"Email: This email is not valid!\n";
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
		result = result.concat"Password: Your password must have at least 6 characters with one uppercase letter, one lowercase letter, a number, and a special character\n";
	}
	if(pass != passCon)
	{
		result = result.concat("Password Confirmation: Your passwords must match.\n");
	}
	return result;
}

function names()
{
	var result = "";
	var reg = /^([A-Z]{1,2})[a-z]+([A-Z]?)[a-z]+$/;
	var regm = /^[A-Z]{1}$/;
	var first = document.getElementById('usrFName').value;
	var last = document.getElementById('usrLName').value;
	var mid = document.getElementById('usrInitial').value;
	if(!first.match(reg))
	{
		result = result.concat("First Name: Your first name isn't formatted correctly, if your name uses punctuation please don't enter it and try again\n");
	}
	if(!mid.match(regm))
	{
		result = result.concat("Middle Initial: Your middle initial isn't formatted correctly\n");
	}
	return result;
}
