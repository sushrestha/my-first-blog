function validation()
{
	if(!document.getElementById('usrEmail').value || !document.getElementById('usrEmailCon').value || !document.getElementById('usrPass').value || !document.getElementById('usrPassCon').value || !document.getElementById('usrAlias').value || !document.getElementById('usrFName').value || !document.getElementById('usrLName').value || !document.getElementById('usrInitial').value || !document.getElementById('usrPNumber').value || !document.getElementById('usrBDay').value )
		{
			alert("All fields are required");
			return false;
		}
	var message = "";
	var adding;

	message = message.concat(checkEmails());
	message = message.concat(names());
	message = message.concat(phnNum());
	message = message.concat(bDay());

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
	if(!email.match(reg))
	{
		result = result.concat("Email: This email is not valid!\n");
	}
	return result;
}

function names()
{
	var result = "";
	var reg = /^([A-Z]{1,2})[a-z]+([A-Z]?)[a-z]+$/;
	var regm = /^[A-Z]+/;
	var first = document.getElementById('usrFName').value;
	var last = document.getElementById('usrLName').value;
	var mid = document.getElementById('usrInitial').value;
	if(mid == "")
	{
		result = result.concat("Middle Initial: You didn't put anything for your middle initial\n");
	}
	else if(!mid.match(regm))
	{
		result = result.concat("Middle Initial: Your middle initial isn't formatted correctly\n");
	}
	
	if(last == "")
	{
		result = result.concat("Last Name: You didn't put anything for your last name\n");
	}
	else if(!last.match(reg) && last.length <= 20)
	{
		result = result.concat("Last Name: Your last name isn't formatted correctly, if your name uses punctuation please don't enter it and try again\n");
	}
	return result;
}

function phnNum()
{
	var result = "";
	var number = document.getElementById('usrPNumber').value;
	var reg = /^\([0-9]{3}\) [0-9]{3}-[0-9]+/;
	if(number == "")
	{
		return "Phone Number: You didn't put anything for your phone number\n";
	}
	else if(!number.match(reg))
	{
		return "Phone Number: Your phone number doesn't match our format\n"
	}
return result;
}

function bDay()
{
	var msg = "";
	var current = new Date();
	var reg = /^[0-1]?[0-9]{1}\/[0-3]?[0-9]{1}\/[1-2]{1}[0-9]{3}$/;
	var date = document.getElementById("usrBDay").value;
	if(date == "")
	{
		return "Birth Date: You didn't put a birthday\n";
	}
	var year = date.substring(6,10);
	var day = date.substring(3, 5);
	var mon = date.substring(0, 2);
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
	if(mon < 1)
	{
		msg = msg.concat("Birth Date: Your birth month can't be below 1");
	}
	else if(mon == 2)
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
	if(day < 1)
	{
		msg = msg.concat("Birth Date: Your birthday can't have a day less than 1");
	}

	return msg;
}