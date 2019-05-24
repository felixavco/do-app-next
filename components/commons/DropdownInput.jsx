
const DropdownInput = ({options, label}) => {
    const selectOptions = options.map((e, i) => <option key={i} value={e.value}>{e.label}</option>)

    return (
    <div class="form-group">
        <label for="DropdownInput">{label}</label>
        <select class="form-control" id="DropdownInput">
            { selectOptions }
        </select>
    </div>
    )
}

export default DropdownInput;