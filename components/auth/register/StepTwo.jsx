import { useEffect, useState } from 'react';
//* Components
import TextInput from '../../commons/TextInput';
import DropdownInput from '../../commons/DropdownInput';

const StepTwo = () => {

    //*State
    const [ firstName, setFirstName ] = useState('')
    const [ middleName, setMiddleName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ lastName2, setLastName2 ] = useState('')


    return (
        <div className="container">
        <small>(*) Campos Requeridos</small>
             {/* Row 1 */}
            <div className="row">
                <div className="col-12 col-md-6">
                    <TextInput
                        value={firstName}
                        message={{}}
                        setValue={setFirstName}
                        setMessage={{}}
                        placeholder="* Nombres"
                        name="firstName"
                        isEmptyErrMsg="campo requerido"
                        lengthValErrMsg="55"
                    />
                </div>
                <div className="col-12 col-md-6">
                      <TextInput
                        value={middleName}
                        message={{}}
                        setValue={setMiddleName}
                        setMessage={{}}
                        placeholder="* Apellidos"
                        name="middleName"
                        isEmptyErrMsg="campo requerido"
                        lengthValErrMsg="55"
                    />
                </div>
            </div>
            {/* Row 2 */}
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Fecha de nacimiento</label>
                        <div className="dob-cont">
                            <DropdownInput

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepTwo
