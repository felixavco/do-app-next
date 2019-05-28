import { useEffect, useState } from 'react';
//* Components
import TextInput from '../../commons/TextInput';
import DropdownInput from '../../commons/DropdownInput';
import { RadioButton } from 'primereact/radiobutton';

import { days, months, years } from '../../../config/dropdown_data';
const StepTwo = () => {

    const defaultYear = new Date().getFullYear() - 30;
    //*State
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastName2, setLastName2] = useState('');
    const [gender, setGender] = useState('M');
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(defaultYear);


    return (
        <div className="container">
            <small>(*) Campos Requeridos</small>

            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <TextInput
                        value={firstName}
                        message={{}}
                        setValue={setFirstName}
                        setMessage={{}}
                        placeholder="*Primer Nombre"
                        name="firstName"
                        isEmptyErrMsg="campo requerido"
                        lengthValErrMsg="55"
                        setMessage={() => console.log("TEST")}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <TextInput
                        value={middleName}
                        message={{}}
                        setValue={setMiddleName}
                        setMessage={{}}
                        placeholder="Segundo Nombre"
                        name="middleName"
                        isEmptyErrMsg="campo requerido"
                        lengthValErrMsg="55"
                        setMessage={() => console.log("TEST")}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <TextInput
                        value={middleName}
                        message={{}}
                        setValue={setMiddleName}
                        setMessage={{}}
                        placeholder="*Apellido"
                        name="middleName"
                        isEmptyErrMsg="campo requerido"
                        lengthValErrMsg="55"
                        setMessage={() => console.log("TEST")}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <TextInput
                        value={middleName}
                        message={{}}
                        setValue={setMiddleName}
                        setMessage={{}}
                        placeholder="Apellido Materno"
                        name="middleName"
                        isEmptyErrMsg="campo requerido"
                        lengthValErrMsg="55"
                        setMessage={() => console.log("TEST")}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-4 col-lg-3 mx-auto mb-3">
                    <h6 className="text-center text-secondary">* Fecha de nacimiento</h6>
                    <div className="dob-cont d-flex justify-content-center align-items-center">
                        <span className="mr-2">
                            <DropdownInput
                                options={days()}
                                onchange={setDay}
                                value={day}
                                allowEmpty={true}
                                selectMessage={{ text: "", error: false, animation: false }}
                            />
                        </span>
                        <span className="mr-2">
                            <DropdownInput
                                options={months()}
                                onchange={setMonth}
                                value={month}
                                allowEmpty={true}
                                selectMessage={{ text: "", error: false, animation: false }}
                            />
                        </span>
                        <span>
                            <DropdownInput
                                options={years()}
                                onchange={setYear}
                                value={year}
                                allowEmpty={true}
                                selectMessage={{ text: "", error: false, animation: false }}
                            />
                        </span>
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-2 mx-auto mb-3">
                    <h6 className="text-center text-secondary">* Genero</h6>
                    <div className="gender-cont d-flex justify-content-center align-items-center">
                        <span className="mr-3">
                            <RadioButton inputId="rb1" name="gender" value="M" onChange={(e) => setGender(e.target.value)} checked={gender === 'M'} />
                            <label htmlFor="rb1" className="p-radiobutton-label">Dr.</label>
                        </span>
                        <span>
                            <RadioButton inputId="rb2" name="gender" value="F" onChange={(e) => setGender(e.target.value)} checked={gender === 'F'} />
                            <label htmlFor="rb2" className="p-radiobutton-label">Dra.</label>
                        </span>
                    </div>
                </div>

                <div className="col-12 col-md-4 col-lg-2 mx-auto mb-3">
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
                        setMessage={() => console.log("TEST")}
                    />
                </div>

                <div className="col-12 col-md-7 col-lg-5 mx-auto mb-3">
                    <h6 className="text-center text-secondary">*Especialidad</h6>
                    <DropdownInput
                        options={[]}
                        onchange={setDay}
                        value={day}
                        selectMessage={{ text: "", error: false, animation: false }}
                        placeholder="Especialidad"
                        allowEmpty={true}
                        setMessage={() => console.log("TEST")}
                    />
                </div>
            </div>
        </div>
    )
}

export default StepTwo
