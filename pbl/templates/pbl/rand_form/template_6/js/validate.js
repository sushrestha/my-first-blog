function validation()
{
	var message = "";
	var adding;

	message = message.concat(checkEmails());
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
		result = result.concat"Email: This email is not valid!\n";
	}
	if(email != emailCon)
	{
		result = result.concat("Email Confirmation: The emails do not match!\n");
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

	return msg;
}