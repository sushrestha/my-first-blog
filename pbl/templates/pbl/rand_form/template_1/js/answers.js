var studentSubmittedOnce = false;

// This will change later
function answers()
{
	// Checks to see if the student has submitted the form on the other side at least once, otherwise its false
	if(studentSubmittedOnce){
		var field0 = getElements("field0");
		var field1 = getElements("field1");
		var field2 = getElements("field2");
		var field3 = getElements("field3");
		var field4 = getElements("field4");
		var field5 = getElements("field5");
		var field6 = getElements("field6");
		var field7 = getElements("field7");
		var field8 = getElements("field8");
		var field9 = getElements("field9");

		// Initializes the grade and starts it at 0
		var grade = 0;
		// Then runs all the checks on all of the fields
		grade  += check(field0);
		grade  += check(field1);
		grade  += check(field2);
		grade  += check(field3);
		grade  += check(field4);
		grade  += check(field5);
	 	grade  += check(field6);
		grade  += check(field7);
		grade  += check(field8);
		grade  += check(field9);
		// Multiplies the grade by 10 to be out of 100
		grade *= 10;
		// Tells user the score
		alert("This is your Score\n" + grade.toPrecision(3) + " : 100");
		return true;
	}
	// If the user has not submitted the form at least once 
	else 
	{
		alert("You must submit the form at least one time before you can get a score");
		return false;
	}
}

// Function to get all of the elements 
function getElements(name)
{
	var allAnswers = document.forms["GradeMe"].getElementsByTagName("select");
	var result = [];
	for(i = 0; i < allAnswers.length; i++)
	{
		if(allAnswers[i].id == name)
		{
			result.push(allAnswers[i]);
		}
	}
	return result;
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
function check(field)
{
	// Answers array
	var answers = getAnswerSet(field[0].id);
	// Current result
	var result = 0;
	// Length of the student's answer array
	var count = field.length;
	// Loops through all of the student's answers unless it returns early
	for(i = 0; i < field.length; i++)
	{
		// If the answers list given is reduced to zero.
		if(answers.length == 0)
		{
			// Too many given answers comparitively to answers to the problem, and if the result isn't zero basically all wrong answers
			if(count != 0 && result != 0)
			{
				// Subtracts a tenth of the result for every extra answer that was given
				result = result/(count+1);
			}
			// Returns the result after the answer length is zero
			return result;
		}
		for(j = 0; j < answers.length; j++)
		{
			if(field[i].value == answers[j])
			{
				result += (1/(answers.length));
				answers.splice(j, 1);
				// Reduces the count of answers that was given by the student
				count -= 1;
			}
		}
	}
	return result;
}

function getAnswerSet(field)
{
	var zero = ["None"];
	var one = ["It does not validate the information given"];
	var two = ["It does not validate the information given"];
	var three = ["It does not have a maximum length","It does not check the formatting of the information"];
	var four = ["It does not check the formatting of the information"];
	var five = ["It does not check the formatting of the information","It does not have a maximum length"];
	var six = ["None"];
	var seven = ["It does not check the formatting of the information", "It does not have a maximum length"];
	var eight = ["None"];
	var nine = ["It does not validate the information given"];

	switch(field)
	{
		case "field0":
			return zero;
		break;
		case "field1":
			return one;
		break;
		case "field2":
			return two;
		break;
		case "field3":
			return three;
		break;
		case "field4":
			return four;
		break;
		case "field5":
			return five;
		break;
		case "field6":
			return six;
		break;
		case "field7":
			return seven;
		break;
		case "field8":
			return eight;
		break;
		case "field9":
			return nine;
		break;
		default:
			alert("Something went wrong");
	}
}

// Litterally just to check that the student has submitted and looked at the form at least once
function studentSub()
{
	studentSubmittedOnce = true;
}