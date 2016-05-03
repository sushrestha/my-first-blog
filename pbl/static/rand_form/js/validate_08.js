function validation()
{
	if(!document.getElementById('usrEmail').value || !document.getElementById('usrEmailCon').value || !document.getElementById('usrPass').value || !document.getElementById('usrPassCon').value || !document.getElementById('usrAlias').value || !document.getElementById('usrFName').value || !document.getElementById('usrLName').value || !document.getElementById('usrInitial').value || !document.getElementById('usrPNumber').value || !document.getElementById('usrBDay').value )
		{
			alert("All fields are required");
			return false;
		}
	var message = "";
	var adding;

	message = message.concat(usrName());
	message = message.concat(checkEmails());
	message = message.concat(passStrength());
	message = message.concat(names());

	if(message == ""){
		alert("You have made a successful submission of the form.");
		return false;
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
	if(!email.match(reg) && emailCon.match(reg) && (email.length <= 40 && email.length >=6) && (emailCon.length <= 40 && emailCon.length >=6))
	{
		result = result.concat("Emails: These emails are not valid!\n");
	}
	if(email != emailCon)
	{
		result = result.concat("Emails: Your emails must match!\n");
	}
	return result;
}

function usrName()
{
	var reg = /^(?=.{6,20}$)(?![_\\/.<>])(?!.*[_.]{2})[a-zA-Z0-9._]+(?![_.\\/<>])$/;
	var name = document.getElementById('usrAlias').value;
	if(name.length <= 20 && name.length >= 6){
		return "Username: UserName can only be 6-20 characters long with no \\, /, <, > symbols\n";
	}
	return "";
}

function passStrength()
{
	var reg = /((?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&'*-+])[^ ]+$)/;
	var pass = document.getElementById('usrPass').value;
	var passCon = document.getElementById('usrPassCon').value;
	var result = "";
	if(!pass.match(reg) && !passCon.match(reg) &&(passCon.length <= 14 && passCon.length >=6))
	{
		result = result.concat("Password:s Your password must have at least 6-14 characters with one uppercase letter, one lowercase letter, a number, and a special character\n");
	}
	for(i=0; i < passCon.length; i++)
	{
		if(pass.charAt(i)!=passCon.charAt(i))
		{
			result = result.concat("Passwords: Your passwords must match.\n");
			break;
		}
	}
	return result;
}

function names()
{
	var result = "";
	var reg = /^([A-Z]{1,2})[a-z]+([A-Z]?)[a-z]+$/;
	var regm = /^[A-Z]+$/;
	var first = document.getElementById('usrFName').value;
	var last = document.getElementById('usrLName').value;
	var mid = document.getElementById('usrInitial').value;
	if(!first.match(reg) && first.length <= 20)
	{
		result = result.concat("First Name: Your first name isn't formatted correctly, if your name uses punctuation please don't enter it and try again\n");
	}
	if(!last.match(reg) && last.length <= 20)
	{
		result = result.concat("Last Name: Your last name isn't formatted correctly\n");
	}
	if(mid.length != 1)
	{
		result = result.concat("Middle Initial: Your middle name isn't formatted correctly\n");
	}
	return result;
}
