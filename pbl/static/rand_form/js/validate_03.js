function validation()
{
	var message = "";
	var adding;

	message = message.concat(usrName());
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
	if(first == "")
	{
		result = result.concat("First Name: You didn't put anything for your first name\n");
	}
	else if(!first.match(reg))
	{
		result = result.concat("First Name: Your first name isn't formatted correctly, if your name uses punctuation please don't enter it and try again\n");
	}
	if(last == "")
	{
		result = result.concat("Last Name: You didn't put anything for your last name\n");
	}
	else if(!last.match(reg))
	{
		result = result.concat("Last Name: Your last name isn't formatted correctly, if your name uses punctuation please don't enter it and try again\n");
	}
	return result;
}

function phnNum()
{
	var result = "";
	var number = document.getElementById('usrPNumber').value;
	var reg = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
	if(number == "")
	{
		return "Phone Number: You didn't put anything for your phone number\n";
	}
	if(!number.match(reg))
	{
		return "Phone Number: Your phone number doesn't match our format\n"
	}

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