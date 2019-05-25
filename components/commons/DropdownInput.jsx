import PropTypes from 'prop-types';
import { isEmpty } from '../../utils/utils';
import { inputError, inputSuccess, msgError, msgSuccess } from './messageStyles';


const DropdownInput = ({ options, selectMessage, setSelectMessage, account_type, setAccount_type }) => {
    const selectOptions = options.map((e, i) => <option key={i} value={e.value}>{e.label}</option>)

    const onSelectBlur = (e) => {
        if (isEmpty(e.target.value)) {
            setSelectMessage({ text: 'Selecione una opción', error: true, animation: true });
        } else {
            setSelectMessage({ text: "", error: false, animation: false });
        }
    }

    return (
        <div className="form-group">
            { /* <label htmlFor="DropdownInput">{label}</label> */}
            <select
                onBlur={onSelectBlur}
                className="form-control"
                id="DropdownInput"
                style={selectMessage.error ? inputError : account_type === '' ? null : inputSuccess}
                onChange={(e) => setAccount_type(e.target.value)}
                value={account_type}
            >
                {selectOptions}
            </select>
            <small className="form-text" style={selectMessage.error ? msgError : account_type === '' ? null : msgSuccess}>
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