import PropTypes from 'prop-types';
import { isEmpty } from '../../utils/utils';
import { inputError, inputSuccess, msgError, msgSuccess } from './messageStyles';


const DropdownInput = ({ options, selectMessage, setSelectMessage, value, onchange, label }) => {
    const selectOptions = options.map((e, i) => <option key={i} value={e.value}>{e.label}</option>)

    const onSelectBlur = (e) => {
        if (isEmpty(e.target.value)) {
            setSelectMessage({ text: 'Selecione una opción', error: true, animation: true });
        } else {
            setSelectMessage({ text: "", error: false, animation: false });
        }
    }

    let labelElement = null;
    if(!isEmpty(label)) {
        labelElement = <label htmlFor="DropdownInput">{label}</label>
    }

    return (
        <div className="form-group">
            { labelElement }
            <select
                onBlur={onSelectBlur}
                className="form-control"
                id="DropdownInput"
                style={selectMessage.error ? inputError : value === '' ? null : inputSuccess}
                onChange={(e) => onchange(e.target.value)}
                value={value}
            >
                {selectOptions}
            </select>
            <small className="form-text" style={selectMessage.error ? msgError : value === '' ? null : msgSuccess}>
                {selectMessage.text}
            </small>
        </div>
    )
}

DropdownInput.propTypes = {
    selectMessage: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.string,
};

export default DropdownInput;