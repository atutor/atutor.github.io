<!--
// CHECK REQUIRED FIELDS - ENSURE THAT A VALUE HAS BEEN ENTERED FOR
//  EVERY FIELD LISTED IN THE "requiredFields" ARRAY
function checkRequiredFields(input)
{
    // YOU SHOULD ONLY NEED TO CHANGE THE VALUES FOR THE FOLLOWING
    //  TWO ARRAYS (requiredFields and fieldNames).  ENSURE THAT
    //  THE VALUES LISTED FOR requiredFields MATCH THE NAMES ASSIGNED
    //  TO FIELD ELEMENTS IN YOUR FORM.

    // ENTER THE NAME (OR PARTIAL NAME) OF EVERY FIELD IN YOUR FORM
    //  THAT MUST HAVE A VALUE (Case-Sensitive)
    var requiredFields = new Array("part_id","ready1");

    // TEXT TO DISPLAY THAT DESCRIBES THE MISSING FIELD(S) TO THE USER
    var fieldNames = new Array("Participant ID","Confirmation that the form is ready to send");
                             
                               
    // YOU SHOULD NOT NEED TO MAKE ANY CHANGES BELOW THIS POINT ------

    var fieldCheck   = true;
    var fieldsNeeded = "\nA value must be entered in the following " +
                       "field(s):\n\n\t";

    for(fieldNum=0; fieldNum < requiredFields.length; fieldNum++) {
        if ((input.elements[requiredFields[fieldNum]].value == "") ||
            (input.elements[requiredFields[fieldNum]].value == " ") ||
             (input.elements[requiredFields[fieldNum]].type == "radio" &&
             !input.elements[requiredFields[fieldNum]].checked)) {
            fieldsNeeded += fieldNames[fieldNum] + "\n\t";
            fieldCheck = false;
        }
    }

    // ALL REQUIRED FIELDS HAVE BEEN ENTERED
    if (fieldCheck == true)
    {
        getAllFields();
        return true;
    }
    // SOME REQUIRED FIELDS ARE MISSING VALUES
    else
    {
        alert(fieldsNeeded);
        return false;
    }
}

function getAllFields() {
    for (i=0; i< document.forms[0].elements.length; i++) {
        document.forms[0].elementList.value += " "+document.forms[0].elements[i].name;
    }
}


// CHECK STRING - ENSURE ALL CHARACTERS ARE LETTERS
//function toAlpha(checkString)
//{
//    newString = "";
//    count = 0;
//    // LOOP THROUGH STRING CHARACTER BY CHARACTER
//    for (i = 0; i < checkString.length; i++) {
//       ch = checkString.substring(i, i+1);
//        // ENSURE CHARACTER IS AN ALPHA CHARACTER
//        if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z" ) || (ch >= "0" && ch <= "9") {
//            newString += ch;
//        }
//	}
    // RETURN REVISED STRING
   // return newString;
//}
//-->
