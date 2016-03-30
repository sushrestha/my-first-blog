// <!-- Code has been removed ------------->






































function selectItem(p)
{
	if (!document.addItem.itemList.value){
		alert("Please select an item!!!");
		return false;
	}
	else{
	document.addItem.submit();
	return true;
	}
}

function proceed(p){
	alert("Jello");
	if(!document.proceedItem.itemChoosen.value){
		alert("Please select an item!!!");
		return false;
	}
	else{
	document.proceedItem.submit();
	return true;		
	}

}
