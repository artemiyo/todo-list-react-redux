export const isInputValid = (title, setErrors) => {
	let errors = [];
	let error;
	
	if(!title) {
			error = { message: 'Заголовок не может быть пустым.' }
			setErrors(errors.concat(error))
			return false
	} else {
			return true
	}
}