import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import { isEmpty } from '../../utils/utils';
import { inputError, inputSuccess, msgError, msgSuccess } from './messageStyles';
import { connect } from 'react-redux';
import { isEmailAvailable } from '../../redux/actions/authActions';

function EmailInput(props) {
	const { email, setEmail, emailMessage, setEmailMessage, placeholder, errors } = props
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (validateEmail(email)) {
			checkEmail(email);
		}
	}, [email]);

	const loginLink = (
		<Link href="/login">
			<a>
				Iniciar sesión?
			</a>
		</Link>
	)

	useEffect(() => {
		if (errors.checkEmail) {
			setEmailMessage({ text: errors.checkEmail, error: true, animation: true });
		} else {
			setEmailMessage({ text: null, error: false, animation: false });
		}
		setIsLoading(false);

	}, [errors])

	//* Makes a request to the backend to check if the email address has been already registered
	const checkEmail = (email) => {
		setIsLoading(true);
		props.isEmailAvailable({ email })
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
	if (isLoading) {
		emailSpinner = <i className="fas fa-spinner fa-pulse" />
	} else {
		emailSpinner = null
	}

	return (
		<div className="form-group">
			{/* <label htmlFor="email" style={emailMessage.error ? msgError : null}>
				{label}
			</label> */}
			<div className="_form-email-input-cont">
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
				<span>{emailSpinner}</span>
			</div>
			<small className="form-text" style={emailMessage.error ? msgError : email === '' ? null : msgSuccess}>
				{emailMessage.text} 
				{emailMessage.text === 'Este correo ya esta registrado' ?  loginLink : ''}
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

const mapStateToProps = (state) => ({
	errors: state.errors
});

export default connect(mapStateToProps, { isEmailAvailable })(EmailInput);
