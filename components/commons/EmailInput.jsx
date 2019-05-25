import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { API_URL } from '../../config/config';
import axios from 'axios';
import { isEmpty } from '../../utils/utils';
import { inputError, inputSuccess, msgError, msgSuccess } from './messageStyles';

function EmailInput({ email, setEmail, emailMessage, setEmailMessage, placeholder, label }) {
	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(
		() => {
			if (validateEmail(email)) {
				isEmailAvailable(email);
			}
		},
		[ email ]
	);

	//* Makes a request to the backend to check if the email address has been already registered
	const isEmailAvailable = async (email) => {
		setIsLoading(true);
		try {
			const res = await axios.post(API_URL + '/user/check-email', { email });
			setEmailMessage({ text: res.data.message, error: false, animation: false });
			setIsLoading(false);
		} catch (err) {
			const { email } = err.response.data;
			setEmailMessage({ text: email, error: true, animation: true });
			setIsLoading(false);
		}
	};

	const validateEmail = (email_val) => {
		const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email_val);
	};

	const onEmailBlur = () => {
		if (isEmpty(email)) {
			setEmailMessage({ text: 'Ingrese su correo.', error: true, animation: true });
		} else if (!validateEmail(email)) {
			setEmailMessage({ text: 'El formato del correo es incorrecto.', error: true, animation: true });
		}
	};

	let emailSpinner;
	if(isLoading) {
		emailSpinner = <i className="fas fa-spinner fa-pulse" />
	} else {
		emailSpinner = null
	}

	return (
		<div className="form-group">
			{/* <label htmlFor="email" style={emailMessage.error ? msgError : null}>
				{label}
			</label> */}
			<div className="Register_form-email-input-cont">
				<input
					style={emailMessage.error ? inputError : email === '' ? null : inputSuccess}
					type="text"
					className={`form-control animated faster ${emailMessage.animation ? 'shake' : ''}`}
					onAnimationEnd={() => setEmailMessage({ ...emailMessage, animation: false })}
					id="email"
					placeholder={placeholder}
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
					onBlur={onEmailBlur}
				/>
				<span>{ emailSpinner }</span>
			</div>
			<small className="form-text" style={emailMessage.error ? msgError : email === '' ? null : msgSuccess}>
				{emailMessage.text}
			</small>
		</div>
	);
}

EmailInput.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string,
	email: PropTypes.string.isRequired,
	setEmail: PropTypes.func.isRequired,
	emailMessage: PropTypes.object.isRequired,
	setEmailMessage: PropTypes.func.isRequired
};

export default EmailInput;
