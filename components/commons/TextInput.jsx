import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ type="text", name, value, placeholder, error, onchange, label }) => {

	let errorMessage = null;
	if (error) {
		errorMessage = (
			<small className="form-text text-muted">
				{error.message}
			</small>
		)
	}

	let labelContent = null;
	if(label) {
		labelContent = <label htmlFor={name}>{label}</label>
	}

	return (
		<div className="form-group">
			{ labelContent }
			<input
				type={type}
				className="form-control is-invalid"
				id={name}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={e => onchange(e)}
			/>
			{errorMessage}
		</div>
	)
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	error: PropTypes.object,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string
}


export default TextInput
