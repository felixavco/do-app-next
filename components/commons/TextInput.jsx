import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, capitalize} from '../../utils/utils';
import { inputError, inputSuccess, msgError, msgSuccess } from './messageStyles';

function TextInput({
	value,
	setValue,
	message,
	setMessage,
	placeholder,
	name,
	isEmptyErrMsg,
	lengthValErrMsg,
	length,
	capitalizeInput = false,
	textArea = false
}) {
	// useEffect(
	// 	() => {
	// 		if (value.length > length.min || value.length < length.max) {
	// 			setMessage({ text: '', error: false, animation: false });
	// 		} else {
	// 			setMessage({ text: lengthValErrMsg, error: true, animation: true });
	// 		}
	// 	},
	// 	[value]
	// );

	const onNameBlur = () => {
		// if (isEmpty(value)) {
		// 	setMessage({ text: isEmptyErrMsg, error: true, animation: true });
		// } else if (value.length < length.min || value.length > length.max) {
		// 	setMessage({ text: lengthValErrMsg, error: true, animation: true });
		// } else {
		// 	setMessage({ text: '', error: false, animation: false });
		// }
	};

	const onChangeHandler = e => {
		if (capitalizeInput) {
			setValue(e.target.value.split(' ').map(n => capitalize(n)).join(' '));
		} else {
			setValue(e.target.value);
		}
	};

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
					onChange={e => onChangeHandler(e)}
					onBlur={onNameBlur}
				/>
				<small className="form-text" style={message.error ? msgError : value === '' ? null : msgSuccess}>
					{message.text}
				</small>
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
					onChange={e => onChangeHandler(e)}
					onBlur={onNameBlur}
				/>
				<small className="form-text" style={message.error ? msgError : value === '' ? null : msgSuccess}>
					{message.text}
				</small>
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
	isEmptyErrMsg: PropTypes.string.isRequired,
	lengthValErrMsg: PropTypes.string.isRequired,
	length: PropTypes.object,
	capitalizeInput: PropTypes.bool,
	textArea: PropTypes.bool
};

export default TextInput;