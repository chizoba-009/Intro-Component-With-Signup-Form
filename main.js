const firstName = document.querySelector('#fname')
const lastName = document.querySelector('#lname')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('#form')

form.addEventListener('submit', e => {
	e.preventDefault()

	checkResults()

	setTimeout(reArrange, 2000)
})

function checkResults() {
	const fNameValue = firstName.value.trim()
	const lNameValue = lastName.value.trim()
	const passwordValue = password.value.trim()
	const emailValue = email.value.trim()

	if (fNameValue === '') {
		setError(firstName, 'First name cannot be blank')
	} else {
		setSuccess(firstName)
	}

	if (lNameValue === '') {
		setError(lastName, 'Last name cannot be blank')
	} else {
		setSuccess(lastName)
	}

	if (emailValue === '') {
		setError(email, 'Email cannot be blank')
	} else if (!isEmail(emailValue)) {
		setError(email, 'Looks like this is not an email')
	} else {
		setSuccess(email)
	}

	if (passwordValue === '') {
		setError(password, 'Password cannot be blank')
	} else if (passwordValue.length < 6) {
		setError(password, 'Password cannot be less than 6 characters')
	} else {
		setSuccess(password)
	}
}

function setError(val, message) {
	const formControl = val.parentElement
	const small = formControl.querySelector('.small')
	formControl.className = 'form-control error'
	small.innerText = message
}

function setSuccess(val) {
	const formControl = val.parentElement
	formControl.className = 'form-control success'
}

function isEmail(email) {
	console.log(email)
	return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
		email
	)
}

function reArrange() {
	document.getElementById('form').reset()
	const icons = document.querySelectorAll('.form-control')
	for (icon of icons) {
		icon.classList.remove('success')
	}
}
