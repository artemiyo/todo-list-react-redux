import React from 'react'
import './ErrorMessages.scss';

const ErrorMessages = ({ errors }) => {
	return (
		errors.map((error, i) => <p key={i}>{error.message}</p>)
	)
}

export default ErrorMessages