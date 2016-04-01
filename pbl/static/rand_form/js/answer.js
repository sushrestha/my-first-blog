var studentSubmittedOnce = false;

// This will change later
function answers()
{
	// Checks to see if the student has submitted the form on the other side at least once, otherwise its false
	if(studentSubmittedOnce){
		document.score.submit();
		return false;
	}
	// If the user has not submitted the form at least once 
	else 
	{
		alert("You must submit the form at least one time before you can get a score");
		return false;
	}
}


/* 
// The grade essentiall derived from how many answers per field that they gave, mind you this is per field
// and it is checked against all anwers that have been derived from our answer table
// If the student gives too many answers, and he has to get atleast on right, it takes the count of the 
// number of fields and devides their current score for this field and divides it by this count (+1 
// because of off by 1)giving a reduced score
//
// score = fiedGrade_0(field_0) + fiedGrade_1(field_1) + ..... + fiedGrade_9(field_9)
// fieldGrade = fieldGrade_Int/(extra_Answers)
// fieldGrade_Int = currentFieldGrade_0 + .... + currentFieldGrade_n where n is the number of actual answers
// currentFieldGrade = (currentAnswer == answerArray[n])/n where n is the number of actual answers, and it loops through the array
*/


// Litterally just to check that the student has submitted and looked at the form at least once
function studentSub()
{
	studentSubmittedOnce = true;
}