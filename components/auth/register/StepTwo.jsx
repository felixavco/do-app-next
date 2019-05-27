import { useEffect, useState } from 'react';
//* Components
import TextInput from '../../commons/TextInput';
import DropdownInput from '../../commons/DropdownInput';
import {RadioButton} from 'primereact/radiobutton';

import { days } from '../../../config/dropdown_data';
const StepTwo = () => {

    //*State
    const [ firstName, setFirstName ] = useState('');
    const [ middleName, setMiddleName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ lastName2, setLastName2 ] = useState('');
    const [ gender, setGender ] = useState('M');
    const [ day, setDay ] = useState(1);

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
                <div className="col-12 col-md-4">
                    <h6 className="text-center text-secondary">* Fecha de nacimiento</h6>
                    <div className="dob-cont d-flex justify-content-around align-items-center">
                        <DropdownInput
                            options={[{label: "5", value: 1}]}
                            onchange={setDay}
                            value={day}
                            selectMessage={{text: "", error: false, animation: false}}
                        />

                        <DropdownInput
                            options={[{label: "Mar", value: 1}]}
                            onchange={setDay}
                            value={day}
                            selectMessage={{text: "", error: false, animation: false}}
                        />

                        <DropdownInput
                            options={[{label: "1989", value: 1}]}
                            onchange={setDay}
                            value={day}
                            selectMessage={{text: "", error: false, animation: false}}
                        />
                    </div>
                </div>

                <div className="col-12 col-md-4 ">
                    <h6 className="text-center text-secondary">* Genero</h6>
                    <div className="gender-cont d-flex justify-content-around align-items-center">
                        <span>
                            <RadioButton inputId="rb1" name="gender" value={gender} onChange={(e) => setGender(e.value)} />
                            <label htmlFor="rb1" className="p-radiobutton-label">Hombre</label>
                        </span>
                        <span>
                            <RadioButton inputId="rb1" name="gender" value={gender} onChange={(e) => setGender(e.value)}  />
                            <label htmlFor="rb1" className="p-radiobutton-label">Mujer</label>
                        </span>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                <h6 className="text-center text-secondary">* JVPM</h6>
                 <TextInput
                        value={firstName}
                        message={{}}
                        setValue={setFirstName}
                        setMessage={{}}
                        placeholder=""
                        name="firstName"
                        isEmptyErrMsg="campo requerido"
                        lengthValErrMsg="55"
                    />
                </div>
            </div>
        </div>
    )
}

export default StepTwo
