import { useEffect, useState } from 'react';
//* Components
import TextInput from '../../commons/TextInput';
import { InputText } from 'primereact/inputtext';
import DropdownInput from '../../commons/DropdownInput';
import { RadioButton } from 'primereact/radiobutton';

import { days, months, years } from '../../../config/dropdown_data';
const StepTwo = () => {

    const defaultYear = new Date().getFullYear() - 30;
    //*State
    const [firstName, setFirstName] = useState('');
    const [firstNameMsg, setFirstNameMsg] = useState({})

    const [middleName, setMiddleName] = useState('');
    const [middleNameMsg, setMiddleNameMsg] = useState({})

    const [lastName, setLastName] = useState('');
    const [lastNameMsg, setLastNameMsg] = useState({})

    const [lastName2, setLastName2] = useState('');
    const [lastName2Msg, setLastName2Msg] = useState({})

    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(defaultYear);

    const [gender, setGender] = useState('M');

    const [jvpm, setjvpm] = useState('')




    return (
        <div className="container">
            <small>(*) Campos Requeridos</small>

            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <TextInput
                        message={firstNameMsg}
                        allowEmtpy={false}
                        value={firstName}
                        onchange={setFirstName}
                        placeholder="*Primer Nombre"
                        name="firstName"
                        capitalizeInput={true}
                        allowTrim={true}
                        length={{ min: 3, max: 20 }}
                        isEmptyMsg="Este campo es requerido"
                        lengthMsg="Entre 3 a 20 caracteres son permitidos"
                        setMessage={setFirstNameMsg}
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <TextInput
                        value={middleName}
                        onchange={setMiddleName}
                        placeholder="Segundo Nombre"
                        name="middleName"
                        capitalizeInput={true}
                        allowTrim={true}
                        length={{ min: 0, max: 20 }}
                        message={middleNameMsg}
                        setMessage={setMiddleNameMsg}
                        lengthMsg="20 caracteres maximo"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <TextInput
                        message={lastNameMsg}
                        allowEmtpy={false}
                        value={lastName}
                        onchange={setLastName}
                        placeholder="*Apellido"
                        name="lastname"
                        capitalizeInput={true}
                        allowTrim={true}
                        length={{ min: 3, max: 20 }}
                        isEmptyMsg="Este campo es requerido"
                        lengthMsg="Entre 3 a 20 caracteres son permitidos"
                        setMessage={setLastNameMsg}
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-3">
                    <TextInput
                        value={lastName2}
                        onchange={setLastName2}
                        setMessage={setLastName2Msg}
                        placeholder="Segundo Apellido"
                        name="lastname2"
                        capitalizeInput={true}
                        allowTrim={true}
                        length={{ min: 0, max: 20 }}
                        message={lastName2Msg}
                        lengthMsg="20 caracteres maximo"
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
                    {/* <TextInput
                        value={jvpm}
                        onchange={setjvpm}
                        name="jvmp"
                    /> */}

                    <div className="form-group">
                        <InputText keyfilter="num" />
                        <small className="form-text" style={{ color: "red" }}>
                            This field id required
                        </small>
                    </div>

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
