function validation()
{
	var message = "";
	var adding;

	message = message.concat(usrName());
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

function bDay()
{
	var msg = "";
	var current = new Date();
	var reg = /^[0-1]?[0-9]{1}\/[0-3]?[0-9]{1}\/[1-2]{1}[0-9]{3}$/;
	var date = document.getElementById("usrBDay").value;
	var length = date.length;
	var year = parseInt(date.substring(length-3,length));
	var mon = parseInt(date.substring(3, 4));
	var day = parseInt(date.substring(0, 1));
	if(!date.match(reg))
	{
		return "Birth Date: Your birthday is not formatted correctly\n";
	}
	if(current.getFullYear() - year < 18)
	{
		msg = msg.concat("Birth Date: You must be 18 or older to sign up\n");
	}
	else if(current.getFullYear() - year > 100)
	{
		msg = msg.concat("Birth Date: I don't think your 100 years old, if you really are contact an admin\n");
	}
	if(mon == 2)
	{
		if(year%4 == 0)
		{
			if(day > 28)
			{
				msg = msg.concat("Birth Date: Even though it was a leap year there is no day after the 28th in Feb.\n");
			}
		}
		else if(day > 27)
		{
			msg = msg.concat("Birth Date: You can't have a day in Feb. greater than 27 in a non-Leap Year\n");
		}
	}
	else if((mon == 4 || mon == 6 || mon == 9 || mon == 11) && (day > 30))
	{
		msg = msg.concat("Birth Date: Those months have at most 30 days\n");
	}
	else if(day > 31)
	{
		msg = msg.concat("Birth Date: You can't have a date with with a day greater than 31\n");
	}

	return msg;
}