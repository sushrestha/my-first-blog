


// store all form values in the form fields.

function loadOldValue(form){
	var firstname = form.fname.value;
	var lastname = form.lname.value;
	var company = form.cname.value;
	var email = form.email.value;
	var username = form.uname.value;
	var password = form.pwd.value;
	var confirmpwd = form.cpwd.value;
}



function validate(ip){
		
		if (check_required_fields(ip)){
			document.useredit.submit();
			return true;
		}
		// else {
		// 	alert('Please enter all required fields!!!');
		// 	return false;
		// } 
		// alert(ip.fname.value);
		// return false;
}

function check_required_fields(form){
	if (!(form.fname.value) || !(form.lname.value) || !(form.fname.value) || !(form.cname.value) || !(form.email.value) || !(form.uname.value) || !(form.pwd.value) || !(form.cpwd.value)){
		alert('Please enter all required fields!!!');
		return false;
	}
	return true;
}

