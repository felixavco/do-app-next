import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, capitalize } from '../../utils/utils';
import { inputError, inputSuccess, msgError, msgSuccess } from './messageStyles';

function TextInput({
	value,
	onchange,
	message = { text: '', error: false, animation: false },
	setMessage,
	placeholder,
	name,
	isEmptyMsg,
	lengthMsg,
	length,
	capitalizeInput = false,
	textArea = false,
	allowEmtpy = true,
	allowTrim = false,
	onlyNumbers = false
}) {



	const onNameBlur = () => {
		if (!allowEmtpy) {
			if (isEmpty(value)) {
				setMessage({ text: isEmptyMsg, error: true, animation: true });
			} else {
				if (!isEmpty(length)) {
					if (value.length < length.min || value.length > length.max) {
						setMessage({ text: lengthMsg, error: true, animation: true });
					} else {
						setMessage({ text: '', error: false, animation: false });
					}
				}
			}
		} else {
			if (!isEmpty(length)) {
				if (value.length < length.min || value.length > length.max) {
					setMessage({ text: lengthMsg, error: true, animation: true });
				} else {
					setMessage({ text: '', error: false, animation: false });
				}
			}
		}

	};

	const onChangeHandler = value => {
		if (capitalizeInput) {
			onchange(value.split(' ').map(n => capitalize(n)).join(' '));
		} else if (onlyNumbers) {
			console.log(TEST)
		} else {
			onchange(value);
		}
	};

	let messageElement = null;
	if (!isEmpty(message)) {
		messageElement = (
			<small className="form-text" style={message.error ? msgError : value === '' ? null : msgSuccess}>
				{message.text}
			</small>
		)
	}

	let content;

	if (textArea) {
		content = (
			<div className="form-group">
				<textarea
					style={message.error ? inputError : value === '' ? null : inputSuccess}
					className={`form-control animated  ${message.animation ? null : ''}`}
					id={value}
					value={value}
					placeholder={placeholder}
					onChange={e => allowTrim ? onChangeHandler(e.target.value.trim()) : onChangeHandler(e.target.value)}
					onBlur={onNameBlur}
				/>
				{messageElement}
			</div>
		);
	} else {
		content = (
			<div className="form-group">
				<input
					style={message.error ? inputError : value === '' ? null : inputSuccess}
					type="text"
					className={`form-control animated ${message.animation ? null : ''}`}
					onAnimationEnd={() => setMessage({ ...message, animation: false })}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={e => allowTrim ? onChangeHandler(e.target.value.trim()) : onChangeHandler(e.target.value)}
					onBlur={onNameBlur}
				/>
				{messageElement}
			</div>
		);
	}

	return content;

}

TextInput.propTypes = {
	value: PropTypes.string.isRequired,
	message: PropTypes.object.isRequired,
	setValue: PropTypes.func.isRequired,
	setMessage: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	name: PropTypes.string.isRequired,
	isEmptyMsg: PropTypes.string.isRequired,
	lengthMsg: PropTypes.string.isRequired,
	length: PropTypes.object,
	capitalizeInput: PropTypes.bool,
	textArea: PropTypes.bool
};

export default TextInput;