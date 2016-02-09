function intentionalyHrd2Read(){


	// Its time to see how you did kid.
	var result = 0;

	
	var ET = document.getElementById('phnNum');
	var AOL = document.getElementById('email');
	var fire = document.getElementById('crdType');
	var pokeDex = document.getElementById('crdNum');
	var usrName = document.getElementById('crdName');
	var secret = document.getElementById('crdCode');
	var timesUp = document.getElementById('crdExpDate');
	var mByson = document.getElementById('check');

	if(!ET.value || !AOL.value || !fire.value || !pokeDex.value || !usrName.value || !secret.value || !timesUp.value){
		namecrd(usrName);
		cardType(fire);
		validCard(pokeDex);
		date(timesUp);
		crdSecret(secret);
		isValid(ET);
		jDoe(AOL);
		var empty = comparing();
		if(empty == 1024){
			return false;
		} else {
			alert("You must fill out all the fields, the ones you missed are filled in red.");
		}
	}

	if(mByson.checked == true){	
		result = result ^ namecrd(usrName);
		result = result ^ cardType(fire);
		result = result ^ validCard(pokeDex);
		result = result ^ date(timesUp);
		result = result ^ crdSecret(secret);
		result = result ^ isValid(ET);
		result = result ^ jDoe(AOL);
		result = result ^ comparing();
		if(result == 0){
		alert("Congratulations, you have completed the level 3");
		window.location.href = "../index.html";
		return true;
		}
	} else{
		alert("The billing same as shipping address box must be checked");
	}
	alert("Try Harder");
}

function alarmingRed(field){
	// Changes the invalid fields redish
	field.style.backgroundColor = "#ff4d4d";
}

function mehOrange(field){
	// Changes wrong fields to orange
	field.style.backgroundColor = "#ff944d";
}

function frostedFlakesGreen(field){
	// Theyyy'rrrreee great!
	field.style.backgroundColor = "#4dff4d";
}

function comparing(){
	var ret = 0;
	var sonar = document.getElementById('shpngAddr');
	var newYrk = document.getElementById('cty');
	var loner = document.getElementById('state');
	var targz = document.getElementById('post');
	var sameAddr = document.getElementById('billingAddr');
	var arlen = document.getElementById('billingCty');
	var blueMntState = document.getElementById('billingState');
	var barber = document.getElementById('billingPost');

	if(sonar.value == ''){
		alarmingRed(sonar);
		ret = ret ^ 1;
	}
	if(newYrk.value == ''){
		alarmingRed(newYrk);
		ret = ret ^ 2;
	}
	if(loner.value == ''){
		alarmingRed(loner);
		ret = ret ^ 4;
	}
	if(targz.value == ''){
		alarmingRed(targz);
		ret = ret ^ 8;
	}
	if(sameAddr.value == ''){
		alarmingRed(sameAddr);
		ret = ret ^ 16;
	}
	if(arlen.value == ''){
		alarmingRed(arlen);
		ret = ret ^ 32;
	}
	if(blueMntState.value == ''){
		alarmingRed(blueMntState);
		ret = ret ^ 64;
	}
	if(barber.value == ''){
		alarmingRed(barber);
		ret = ret ^ 128;
	}
	if(ret != 0){
		alert("You must fill out all the fields, the ones you missed are filled in red.");
		return 1024;
	}

	if((sonar.value == sameAddr.value)&&(newYrk.value == arlen.value)&&(loner.value == blueMntState.value)&&(targz.value == barber.value)){
		alert("Shipping information and Billing information match\nTry to submit the form with billing information different from the shipping information with checked checkbox.");
		return 1024;
	} else {
		var addReg = /(\d{1,}\s[A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,})|(\d{1,}\s[A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,}\.)/;
		var ctyReg = /([A-Z]{1})([a-z]{1,})/;
		var zipReg = /\d{5}/;
		frostedFlakesGreen(loner);
		frostedFlakesGreen(blueMntState);
		if(!sonar.value.match(addReg) && sameAddr.value.match(addReg)){
			frostedFlakesGreen(sameAddr);
			mehOrange(sonar);
			ret = ret ^ 2;
		} else if(sonar.value.match(addReg) && !sameAddr.value.match(addReg)){
			frostedFlakesGreen(sonar);
			mehOrange(sameAddr);
			ret = ret ^ 4;
		}
		frostedFlakesGreen(sonar);
		frostedFlakesGreen(sameAddr);
		if(!newYrk.value.match(ctyReg) && arlen.value.match(ctyReg)){
			frostedFlakesGreen(arlen);
			mehOrange(newYrk);
			ret = ret ^ 8;
		} else if(newYrk.value.match(ctyReg) && !arlen.value.match(ctyReg)){
			frostedFlakesGreen(newYrk);
			mehOrange(arlen);
			ret = ret ^ 16;
		}
		frostedFlakesGreen(arlen);
		frostedFlakesGreen(newYrk);
		if(!targz.value.match(zipReg) && barber.value.match(zipReg)){
			frostedFlakesGreen(barber);
			mehOrange(targz);
			ret = ret ^ 32;
		} else if(targz.value.match(zipReg) && !barber.value.match(zipReg)){
			frostedFlakesGreen(targz);
			mehOrange(barber);
			ret = ret ^ 64;
		}
		frostedFlakesGreen(barber);
		frostedFlakesGreen(targz);	
	}
	if(ret == 0){
		return 2;
	}
	return 1024;

}

function namecrd(crd){
	if(crd.value.match(/([A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,})|([A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,}\s[A-Z]{1}[a-z]{1,})/)){
		frostedFlakesGreen(crd);
		return 2;
	}
	mehOrange(crd);
	if(crd.value == ""){
		alarmingRed(crd);
	}
	return 16384;
}

function cardType(crd){
	if(crd.value != ""){
		frostedFlakesGreen(crd);
		return 11;
	}
	alarmingRed(crd);
	return 8192;
}

function validCard(crd){
	if(crd.value.match(/\d{16}/)){
		frostedFlakesGreen(crd);
		return 6;
	}
	mehOrange(crd);
	if(crd.value == ""){
		alarmingRed(crd);
	}
	return 1024;
}

function date(crd){
	if(crd.value.match(/(\d{2})\/(\d{4})/)){
		var today = new Date();
		var mToday = (today.getMonth())+1;
		var yToday = today.getFullYear();
		var m = crd.value.substring(0, 2);
		var y = crd.value.substring(3, 7);
		if((y > yToday)||(y==yToday && m >= mToday)){
			frostedFlakesGreen(crd);
			return 11;
		}
	}
	mehOrange(crd);
	if(crd.value == ""){
		alarmingRed(crd);
	}
	return 4096;
}

function crdSecret(crd){
	if(crd.value.match(/\d{3,4}/)){
		frostedFlakesGreen(crd);
		return 6;
	}
	mehOrange(crd);
	if(crd.value == ""){
		alarmingRed(crd);
	}
	return 2048;
}

function isValid(jennysNum) {
  	if(jennysNum.value.match(/^\(?[0-9]{3}(\-|\)) ?[0-9]{3}-[0-9]{4}$/)){
  		frostedFlakesGreen(jennysNum);
  		return 99;
	}
	mehOrange(jennysNum);
	if(jennysNum.value == ""){
		alarmingRed(jennysNum);
	}
  return 512;
}

function jDoe(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value)){
    	frostedFlakesGreen(email);
    	return 99;
    }
    mehOrange(email);
	if(email.value == ""){
		alarmingRed(email);
	}
    return 256;
}