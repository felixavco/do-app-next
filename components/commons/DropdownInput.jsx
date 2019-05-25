
const DropdownInput = ({options, label}) => {
    const selectOptions = options.map((e, i) => <option key={i} value={e.value}>{e.label}</option>)

    return (
    <div className="form-group">
        { /* <label htmlFor="DropdownInput">{label}</label> */ }
        <select className="form-control" id="DropdownInput">
            { selectOptions }
        </select>
    </div>
    )
}

export default DropdownInput;