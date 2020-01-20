import React from 'react'
import './ErrorMessages.scss';

const ErrorMessages = ({ errors }) => {
	return (
		errors.map(error => <p>{error.message}</p>)
	)
}

export default ErrorMessages