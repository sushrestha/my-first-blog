function chkClicked()
{
	// Gets the value of the check box, whether or not it has been checked
	var box = document.getElementById('check').checked;

	// Defining and instantiation of all used, check or unchecked, needed references
	var billingAddr = document.getElementById('billingAddr');
	var billingCty = document.getElementById('billingCty');
	var billingState = document.getElementById('billingState');
	var billingPost = document.getElementById('billingPost');

	if(box == true){	
		// The box is checked
	


		// The copying of the shipping info to the payment info
		billingAddr.value = document.getElementById('shpngAddr').value;
		billingCty.value = document.getElementById('cty').value;
		billingState.value = document.getElementById('state').value;
		billingPost.value = document.getElementById('post').value;

		if (!billingAddr.value || !billingCty.value || !billingState.value || !billingPost.value){
			alert("Please first fill up the shipping information !!!");
			document.getElementById('check').checked = false;
			return
		}

		// The disabling of the input billing information on the html doc
		billingAddr.disabled = true;
		billingCty.disabled = true;
		billingState.disabled = true;
		billingPost.disabled = true;

	} else {
		// The box is unchecked

		// The re-enabling of input billing information on the html doc
		billingAddr.disabled = false;
		billingCty.disabled = false;
		billingState.disabled = false;
		billingPost.disabled = false;
	}
}
