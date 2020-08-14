// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var surname = document.contactForm.surname.value;
    var given_name = document.contactForm.given_name.value;
    var dob = document.contactForm.dob.value;
    var residence = document.contactForm.residence.value;
    var occupation = document.contactForm.occupation.value;
    var nationality = document.contactForm.nationality.value;
    
    
    
	// Defining error variables with a default value
    var surnameErr = given_nameErr = dobErr = residenceErr = occupationErr = nationalityErr = true;
    
    // Validate surname
    if(surname == "") {
        printError("surnameErr", "This field is required");
    }
         else {
            printError("surnameErr", "");
            surnameErr = false;
        }
    
    if(given_name == "") {
        printError("given_nameErr", "This field is required");
    }
         else {
            printError("given_nameErr", "");
            given_nameErr = false;
        }

    if(dob == "") {
            printError("dobErr", "This field is required");
        }
             else {
                printError("dobErr", "");
                dobErr = false;
            }

        if(residence == "") {
                printError("residenceErr", "This field is required");
            }
                 else {
                    printError("residenceErr", "");
                    residenceErr = false;
                }

            if(occupation == "") {
                    printError("occupationErr", "This field is required");
                }
                     else {
                        printError("occupationErr", "");
                        occupationErr = false;
                    }
    

    

    
    // Prevent the form from being submitted if there are any errors
    if((surnameErr || given_nameErr || dobErr || residenceErr || occupationErr) == true) {
       return false;
    } else{
        return true;
    }
};