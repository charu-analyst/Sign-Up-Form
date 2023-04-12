// Get form, buttons, and inputs
const form = document.querySelector("form");
const nextBtn = form.querySelector(".nextBtn");
const backBtn = form.querySelector(".backBtn");
const allInput = form.querySelectorAll(".first input");


//next buuton
function nextButton() {
  // Get all the input fields
  const inputFields = document.querySelectorAll('input[type="text"], input[type="email"],input[type="tel"],input[type="date"],input[type="password"], select');

  // Check if all input fields are filled properly
  let allFieldsFilled = true;
  inputFields.forEach((field) => {
    if (!field.value) {
      allFieldsFilled = false;
    }
  });
 // Proceed to next page or show error message
 if (allFieldsFilled) {
  //move to next page
    return "move to next page";
  } else {
    // Show error message
    alert("Please fill all the mandatory fields.");

  }
}

// Add event listener to next button
 nextBtn.addEventListener("click", () => {
   allInput.forEach(input => {
     if (input.value != "") {
       form.classList.add('secActive');
    } else {
      form.classList.remove('secActive');
    }
  });
 });

//Add event listener to back button
backBtn.addEventListener("click", () => {
  form.classList.remove('secActive');
});





function validateFirstName() {
  const fnameInput = document.getElementById("fname");
  const fnameError = document.getElementById("fname-error");
  const fnameValue = fnameInput.value.trim();

  // Check if first name is empty
  if (fnameValue === "") {
    fnameError.textContent = "First name cannot be empty.";
    fnameError.classList.remove("hide");
    return false;
  }
  if (/[^\w\s]/.test(fnameValue)) {
    fnameError.textContent = "special characters are not allowed.";
    fnameError.classList.remove("hide");
    return false;
  }
  // Check if first name is at least two characters
  if (fnameValue.length < 2) {
    fnameError.textContent = "First name must have 2 or more characters.";
    fnameError.classList.remove("hide");
    return false;
  }

  // Check if any character is repeated more than 2 times consecutively
  if (/(.)\1\1/.test(fnameValue)) {
    fnameError.textContent = "No character can repeat more than 2 times.";
    fnameError.classList.remove("hide");
    return false;
  }

  // If all checks pass, remove any existing error message
  fnameError.textContent = "";
  fnameError.classList.add("hide");
  return true;
}

function validateLastName() {
  const lnameInput = document.getElementById("lname");
  const lnameError = document.getElementById("lname-error");
  const lnameValue = lnameInput.value.trim();

  // Check if last name is empty
  if (lnameValue === "") {
    lnameError.textContent = "Last name cannot be empty.";
    lnameError.classList.remove("hide");
    return false;
  }
  // Check if last name contains special characters
  if (/[^\w\s]/.test(lnameValue)) {
    lnameError.textContent = "Special characters are not allowed in last name.";
    lnameError.classList.remove("hide");
    return false;
  }
  // Check if last name is at least two characters
  if (lnameValue.length < 2) {
    lnameError.textContent = "Last name must have 2 or more characters.";
    lnameError.classList.remove("hide");
    return false;
  }

  // Check if any character is repeated more than 2 times consecutively
  if (/(.)\1\1/.test(lnameValue)) {
    lnameError.textContent = "No character can repeat more than 2 times.";
    lnameError.classList.remove("hide");
    return false;
  }

  // If all checks pass, remove any existing error message
  lnameError.textContent = "";
  lnameError.classList.add("hide");
  return true;
}


//date of birth
// function validateDOB() {
//   // const dobInput = document.querySelector('input[type="date"]');
//   const dobInput= document.getElementById('birthDate')
//   const dob = new Date(dobInput.value);
//   const today = new Date();
  
//   if (dob > today) {
//     return "Date of birth must be before today's date";
//   } else {
//     dobInput.setCustomValidity('');
//   }
// }




//Mobile number
function validatePhoneNumber() {
  const phoneNumberInput = document.getElementById("phoneNumber");
  const phoneNumber = phoneNumberInput.value;
  const phoneNumberRegex = /^(?!0)\d*(\d)(?!\1{9})\d{9}$/;
  

  if (phoneNumber.match(phoneNumberRegex)) {
    // Phone number is valid
    phoneNumberInput.setCustomValidity("");
    
    document.getElementById("phone-error").classList.add("hide");
  }
  else {
    // Phone number is invalid
    phoneNumberInput.setCustomValidity("Invalid phone number");
    document.getElementById("phone-error").classList.remove("hide");
  }
}
const inputElement = document.getElementById('phoneNumber');

inputElement.addEventListener('keydown', onlyNumbersAndBackspace);

function onlyNumbersAndBackspace(event) {
  const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace'];
  const key = event.key;

  if (!allowedKeys.includes(key)) {
    event.preventDefault();
  }
}

// Get the email input element by its ID
const emailInput = document.getElementById('email');

// Add an event listener to the email input element to validate it on input
emailInput.addEventListener('input', () => {
  // Call the validateEmail function with the email input value as an argument
  validateEmail(emailInput.value.trim());
});

function validateEmail(email) {
  // Create a regular expression to match the email format
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z-]+\.{1}[a-zA-Z]{2,}$/;

  // Get the error message elements by their IDs
  const emailError = document.getElementById('email-error');
  const emptyEmail = document.getElementById('empty-email');

  // Check if the email is empty
  if (email === '') {
    emailError.classList.add('hide');
    emptyEmail.classList.remove('hide');
    return false;
  } else {
    emptyEmail.classList.add('hide');
  }

  // Check if the email matches the pattern
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Invalid Email';
    emailError.classList.remove('hide');
    return false;
  } else {
    emailError.classList.add('hide');
  }

  // Check if the email starts with a special character
  if (/^[^a-zA-Z0-9]+/.test(email)) {
    emailError.textContent = 'Email cannot start with a special character';
    emailError.classList.remove('hide');
    return false;
  } else {
    emailError.classList.add('hide');
  }

  // Check if the email contains @ symbol
  if (email.indexOf('@') === -1) {
    emailError.textContent = 'Email must contain @ symbol';
    emailError.classList.remove('hide');
    return false;
  } else {
    emailError.classList.add('hide');
  }

  // Check if the email ends with a dot
  if (email.slice(-1) === '.') {
    emailError.textContent = 'Email cannot end with a dot';
    emailError.classList.remove('hide');
    return false;
  } else {
    emailError.classList.add('hide');
  }

  // Check if the strings after the dot are not same
  const dotIndex = email.lastIndexOf('.');
  const emailDomain = email.slice(dotIndex + 1);
  if (/^(.){2}\1+$/.test(emailDomain)) {
    emailError.textContent = 'Invalid Email';
    emailError.classList.remove('hide');
    return false;
  } else {
    emailError.classList.add('hide');
  }

  // If the email is valid, return true
  return true;
}
//function for idnumber base on id type
// function validateIdNumber() {
//   const idType = document.getElementById("idproof").value;
//   const idNumberInput = document.querySelector("input[type='tel']");

//   let regex;
//   if (idType === "adhr") {
//     regex = /^\d{12}$/; // 12 digits only
//   } else if (idType === "pan") {
//     regex = /^[A-Za-z]{5}\d{4}[A-Za-z]$/; // 10 alphanumeric characters
//   }

//   if (!regex.test(idNumberInput.value)) {
//     alert("Invalid ID number. Please enter a valid ID number.");
//     idNumberInput.focus();
//     return false;
//   }

//   return true;
// }

function validateIdNumber() {
  const idType = document.getElementById("idproof").value;
  const idNumberInput = document.getElementById("idNumber");
  const idNumber = idNumberInput.value;

  let regex = null;
  let error = "";

  if (idType === "adhr") {
      regex = /^[0-9]{12}$/;
      error = "Please enter a 12-digit number for your Aadhaar card ID number.";
  } else if (idType === "pan") {
      regex = /^[A-Za-z0-9]{10}$/;
      error = "Please enter a 10-digit alphanumeric value for your PAN card ID number.";
  }

  if (regex && !regex.test(idNumber)) {
      idNumberInput.style.borderColor = "red";
      document.getElementById("idnumber-error").innerHTML = error;
  } else {
      idNumberInput.style.borderColor = "";
      document.getElementById("idnumber-error").innerHTML = "";
  }
}


//upload field

function validatePDF() {
  const fileInput = document.querySelector('input[type="file"]');
  const filePath = fileInput.value;
  const allowedExtensions = /(\.pdf)$/i;
  const errorElement = document.getElementById('error');

  if (!allowedExtensions.exec(filePath)) {
    errorElement.textContent = 'Please upload a file in PDF format only.';
    errorElement.style.color = 'red';
    fileInput.value = '';
    return false;
  } else {
    // The file is valid, so clear any error messages
    errorElement.textContent = '';
    errorElement.style.color = '';
    return true;
  }
}



//password
function validatePassword() {
  const passwordField = document.getElementById('password');
  const verifyPasswordField = document.getElementById('verify-password');
  const password = passwordField.value;
  const verifyPassword = verifyPasswordField.value;
  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
  
  if (!password) {
    document.getElementById('empty-password').classList.remove('hide');
  } else if (!passwordRegex.test(password)) {
    document.getElementById('password-error').classList.remove('hide');
  }
  
  if (!verifyPassword) {
    document.getElementById('empty-verify-password').classList.remove('hide');
  } else if (password !== verifyPassword) {
    document.getElementById('verify-password-error').classList.remove('hide');
  }
  
  if (password && verifyPassword && passwordRegex.test(password) && password === verifyPassword) {
    return true;
  } else {
    return false;
  }
}

//password
function validatePassword() {
  const passwordInput = document.getElementById("password");
  const password = passwordInput.value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValidPassword = passwordRegex.test(password);
  const passwordError = document.getElementById("password-error");
  const emptyPassword = document.getElementById("empty-password");
  if (password.length === 0) {
    passwordError.classList.add("hide");
    emptyPassword.classList.remove("hide");
  } else if (isValidPassword) {
    passwordError.classList.add("hide");
    emptyPassword.classList.add("hide");
  } else {
    passwordError.classList.remove("hide");
    emptyPassword.classList.add("hide");
  }
}


//checkpassword
function checkPasswords() {
  var password = document.getElementById("password").value;
  var verifyPassword = document.getElementById("verify-password").value;

  if (password != verifyPassword) {
    document.getElementById("verify-password-error").classList.remove("hide");
    return false;
  } else {
    document.getElementById("verify-password-error").classList.add("hide");
    return true;
  }
}

//ID type
function checkIDType() {
  var idTypeField = document.querySelector('input[type="text"]');
  var idTypeValue = idTypeField.value.trim();

  if (!idTypeValue) {
    idTypeField.setCustomValidity('ID Type field is not empty!');
  } else {
    idTypeField.setCustomValidity('');
  }
}

const inputElement1 = document.getElementById('userid');

inputElement1.addEventListener('keydown', onlyAlphabetsAndBackspace);

function onlyAlphabetsAndBackspace(event) {
  const allowedKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'Backspace'];
  const key = event.key;

  if (!allowedKeys.includes(key)) {
    event.preventDefault();
  }
}

//fathername
function validateFatherName() {
  const fatherNameField = document.getElementById('fatherName');
  const fatherNameValue = fatherNameField.value.trim();
  const regex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

  if (fatherNameValue === "") {
    fatherNameField.setCustomValidity("Father name cannot be empty.");
  } else if (!regex.test(fatherNameValue)) {
    fatherNameField.setCustomValidity("Father name should not contain special characters and should have only one space between two strings.");
  } else if (fatherNameValue.length > 20) {
    fatherNameField.setCustomValidity("Father name should be less than or equal to 20 characters.");
  } else {
    fatherNameField.setCustomValidity("");
  }
}


//mothername
function validateMotherName() {
  const motherNameField = document.querySelector('input[type="text"]');
  const motherNameValue = motherNameField.value.trim();
  const regex = /^[a-zA-Z]+\s?[a-zA-Z]*$/;

  if (motherNameValue === "") {
    motherNameField.setCustomValidity("Mother name cannot be empty.");
  } else if (!regex.test(motherNameValue)) {
    motherNameField.setCustomValidity("Special characters are not allowed. Mother name should have only one space between two strings.");
  } else if (motherNameValue.split(" ").length > 2) {
    motherNameField.setCustomValidity("Mother name should have only one space between two strings.");
  } else if (motherNameValue.length < 2) {
    motherNameField.setCustomValidity("Mother name must be more than 2 characters.");
  } else if (motherNameValue.length > 20) {
    motherNameField.setCustomValidity("Mother name should be less than or equal to 20 characters.");
  } else if (/([a-zA-Z])\1\1/.test(motherNameValue)) {
    motherNameField.setCustomValidity("Repeating characters are not allowed more than two times.");
  } else {
    motherNameField.setCustomValidity("");
  }
}

//GrandFather name
function validateGrandfatherName() {
  const grandfatherNameField = document.querySelector('input[placeholder="Enter grandfther name"]');
  const grandfatherNameValue = grandfatherNameField.value.trim();

  const regex = /^[a-zA-Z]+\s?[a-zA-Z]*$/;

  // Check for special characters
  if (!regex.test(grandfatherNameValue)) {
    grandfatherNameField.setCustomValidity('Grandfather name should not contain special characters and should have only one space between two strings.');
  } 
  // Check for repeating characters more than 2 times
  else if (/([a-zA-Z])\1{2,}/.test(grandfatherNameValue)) {
    grandfatherNameField.setCustomValidity('Repeating characters not allowed more than 2 times.');
  }
  // Check for length
  else if (grandfatherNameValue.length < 2) {
    grandfatherNameField.setCustomValidity('Grandfather name must be more than 2 characters.');
  } else if (grandfatherNameValue.length > 20) {
    grandfatherNameField.setCustomValidity('Grandfather name should be less than or equal to 20 characters.');
  } else {
    grandfatherNameField.setCustomValidity('');
  }
}

//sposename
function validateSpouseName() {
  const spouseNameField = document.getElementById('spouseName');
  const spouseNameValue = spouseNameField.value.trim();
  const regex = /^[a-zA-Z]+\s?[a-zA-Z]*$/;

  if (spouseNameValue.length < 2) {
    spouseNameField.setCustomValidity('Spouse name must be more than 2 characters');
  } else if (!regex.test(spouseNameValue)) {
    spouseNameField.setCustomValidity('Special characters are not allowed. Only one space is allowed between strings. Repeating characters are not allowed more than twice.');
  } else if (spouseNameValue.split(' ').length > 2) {
    spouseNameField.setCustomValidity('Only one space is allowed between strings');
  } else if (/([a-zA-Z])\1{2}/.test(spouseNameValue)) {
    spouseNameField.setCustomValidity('Repeating characters are not allowed more than twice');
  } else if (spouseNameValue.length > 20) {
    spouseNameField.setCustomValidity('Spouse name should be less than or equal to 20 characters');
  } else {
    spouseNameField.setCustomValidity('');
  }
}





//Submit button
submitButton.addEventListener("click", () => {
  if (validClasses.length == 24 && invalidClasses.length == 0) {
    alert("Registartion Sucessfully");
  } else {
    alert("Error! Please Enter Valid Deatails");
  }
});
function submitButton() {
  // Get all the input fields
  const inputFields = document.querySelectorAll('input[type="text"], input[type="email"],input[type="tel"],input[type="date"],input[type="password"], select');

  // Check if all input fields are filled properly
  let allFieldsFilled = true;
  inputFields.forEach((field) => {
    if (!field.value) {
      allFieldsFilled = false;
    }
  });
 // Proceed to next page or show error message
 if (allFieldsFilled) {
  //move to next page
    alert("register successfully");
  } 
}