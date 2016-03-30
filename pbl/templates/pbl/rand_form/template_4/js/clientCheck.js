// Four buttons max, counter array
var btnCounter = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var emailAlert = null;
var emailAlerted = false;

var passAlert = null;
var passAlerted = false;

var buttonRef = 0;
var buttonRefName = "remB";

function validateEmail()
{
	var email1 = document.getElementById('usrEmail').value;
	var email2 = document.getElementById('usrEmailCon');
	if(email1 != email2.value)
	{
		noMatch(email2);
	} else
	{
		yMatch(email2);
	}
	return false;
}

function validatePass()
{
	var password1 = document.getElementById('usrPass').value;
	var password2 = document.getElementById('usrPassCon');
	if(password1 != password2.value)
	{
		noMatch(password2);
	} else 
	{
		yMatch(password2);
	}
	return false;
}

function yMatch(field)
{
	var remove = null;
	var currentStatus = emailAlerted;
	if(field == document.getElementById('usrEmailCon') && emailAlerted)
	{
		remove = emailAlert;
		emailAlert = null;
		emailAlerted = false;
	}
	else if(field == document.getElementById('usrPassCon') && passAlerted)
	{
		remove = passAlert;
		passAlert = null;
		passAlerted = false;
	}
	try{
		remove.parentNode.removeChild(remove);
		}
	catch(TypeError){
		// Just to catch the error and keep it from halting all progress
	}
	
}

// This function needs to be commented out until it if finished 
// and can be impletemented
function noMatch(field)
{
	var tracker;
	var attr = document.createElement('SMALL');
	var alertText
	var currentContext = emailAlerted;
	if(field == document.getElementById('usrEmailCon') && emailAlerted != true)
	{
		alertText = document.createTextNode("*Emails in both fields must match");
		tracker = 0;
		attr.appendChild(alertText);
		attr.style.color = "red";
		attr.style.fontSize = "xx-small";
		field.parentNode.insertBefore(attr, field);
	} else if(field == document.getElementById('usrPassCon') && passAlerted != true){
		alertText = document.createTextNode("*Passwords in both fields must match");
		tracker = 1;
		attr.appendChild(alertText);
		attr.style.color = "red";
		attr.style.fontSize = "xx-small";
		field.parentNode.insertBefore(attr, field);
	}
	if(tracker == 0)
	{
		attr.id = "email";
		emailAlert = attr;
		emailAlerted = true;
	} 
	else if(tracker == 1)
	{
		attr.id = "pass";
		passAlert = attr;
		passAlerted = true;
	}
}

function addButton(field)
{

	var id = document.getElementById(field).id;
	if(checkButtons(id)){
		var position = getCounter(field);
		var parent = document.getElementById(field);
		var remove = document.createElement('BUTTON');
		remove.dataToggle="tooltip";
		remove.title="This box isn't needed so remove it";
		remove.type = "button";
		remove.className = "col-sm-2";
		remove.onclick = function(){
			removeButton(this);
		}
		var textField = document.createElement("SMALL");
		textField.style.fontSize = "xx-small";
		var removeText = document.createTextNode("Remove Box");
		textField.appendChild(removeText);
		remove.appendChild(textField);
		var element = document.createElement('SELECT');
		var option0 = document.createElement('OPTION');
		option0.text = "None";
		element.add(option0);
		var option1 = document.createElement('OPTION');
		option1.text = "It does not have a maximum length";
		element.add(option1);
		var option2 = document.createElement('OPTION');
		option2.text = "It does not validate the information given";
		element.add(option2);
		var option3 = document.createElement('OPTION');
		option3.text = "It does not check the formatting of the information";
		element.add(option3);
		element.id = field;
		element.className = "col-sm-8"
		element.style = "text-align:center;";
		var check1 = parent.nextSibling.nextSibling;
		var check2 = parent.nextElementSibling.nextElementSibling;
		parent.parentNode.insertBefore(element, check2);
		parent.parentNode.insertBefore(remove, check2);
	} else
	{
		alert("You already have the maximum number of that kind of button");
	}
}


function removeButton(field)
{
	var testing = field.previousSibling;
	var position = getCounter(testing.id);
	btnCounter[position] -= 1;
	field.parentNode.removeChild(field.previousSibling);
	field.parentNode.removeChild(field);
}

function checkButtons(id)
{
	var result = true;
	var postion = getCounter(id);
	var testing = btnCounter[2];
	if(btnCounter[postion] < 3)
	{
		btnCounter[postion] += 1;
		return true;
	}
	else
	{
		return false;
	}
}

function getCounter(id)
{
	switch(id)
	{
		case "field0":
			return 0;
		break;
		case "field1":
			return 1;
		break;
		case "field2":
			return 2;
		break;
		case "field3":
			return 3;
		break;
		case "field4":
			return 4;
		break;
		case "field5":
			return 5;
		break;
		case "field6":
			return 6;
		break;
		case "field7":
			return 7;
		break;
		case "field8":
			return 8;
		break;
		case "field9":
			return 9;
		break;
	}
}