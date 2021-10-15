const email = document.querySelector('.input_1');
const password = document.querySelector('.input_2');
const email_error = document.querySelector('#email_error');
const password_error = document.querySelector('#password_error');

function validated(){
	let emailformat = /^([a-z0-9\.-]+)@([a-z]+).(com)$/;
	if (!email.value.match(emailformat)) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	} 
	if (password.value.length < 5) {
		password.style.border = "1px solid red";
		password_error.style.display = "block";
		password.focus();
		return false;
	}
}

function email_Verify() {
	let emailformat = /^([a-z0-9\.-]+)@([a-z]).(com)$/;
	if (email.value.match(emailformat)) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}

function password_Verify() {
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		password_error.style.display = "none";
		return true;
	}
}

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);