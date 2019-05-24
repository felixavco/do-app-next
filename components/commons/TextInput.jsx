import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, capitalize} from '../../utils/utils';
import { inputError, inputSuccess, msgError, msgSuccess } from './messageStyles';

function TextInput({
	textValue,
	setTextValue,
	message,
	setMessage,
	placeholder,
	inputName,
	isEmptyErrMsg,
	lengthValErrMsg,
	length,
	capitalizeInput = false,
	textArea = false
}) {
	useEffect(
		() => {
			if (textValue.length > length.min || textValue.length < length.max) {
				setMessage({ text: '', error: false, animation: false });
			} else {
				setMessage({ text: lengthValErrMsg, error: true, animation: true });
			}
		},
		[textValue]
	);

	const onNameBlur = () => {
		if (isEmpty(textValue)) {
			setMessage({ text: isEmptyErrMsg, error: true, animation: true });
		} else if (textValue.length < length.min || textValue.length > length.max) {
			setMessage({ text: lengthValErrMsg, error: true, animation: true });
		} else {
			setMessage({ text: '', error: false, animation: false });
		}
	};

	const onChangeHandler = e => {
		if (capitalizeInput) {
			setTextValue(e.target.value.split(' ').map(n => capitalize(n)).join(' '));
		} else {
			setTextValue(e.target.value);
		}
	};

	let content;

	if (textArea) {
		content = (
			<div className="form-group">
				<textarea
					style={message.error ? inputError : textValue === '' ? null : inputSuccess}
					className={`form-control animated  ${message.animation ? null : ''}`}
					id={textValue}
					value={textValue}
					placeholder={placeholder}
					onChange={e => onChangeHandler(e)}
					onBlur={onNameBlur}
				/>
				<small className="form-text" style={message.error ? msgError : textValue === '' ? null : msgSuccess}>
					{message.text}
				</small>
			</div>
		);
	} else {
		content = (
			<div className="form-group">
				<input
					style={message.error ? inputError : textValue === '' ? null : inputSuccess}
					type="text"
					className={`form-control animated ${message.animation ? null : ''}`}
					onAnimationEnd={() => setMessage({ ...message, animation: false })}
					placeholder={placeholder}
					name={inputName}
					value={textValue}
					onChange={e => onChangeHandler(e)}
					onBlur={onNameBlur}
				/>
				<small className="form-text" style={message.error ? msgError : textValue === '' ? null : msgSuccess}>
					{message.text}
				</small>
			</div>
		);
	}

	return content;
}

TextInput.propTypes = {
	textValue: PropTypes.string.isRequired,
	message: PropTypes.object.isRequired,
	setTextValue: PropTypes.func.isRequired,
	setMessage: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	inputName: PropTypes.string.isRequired,
	isEmptyErrMsg: PropTypes.string.isRequired,
	lengthValErrMsg: PropTypes.string.isRequired,
	length: PropTypes.object,
	capitalizeInput: PropTypes.bool,
	textArea: PropTypes.bool
};

export default TextInput;