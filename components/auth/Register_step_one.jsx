import { useState, useEffect } from 'react';
import DropdownInput from '../commons/DropdownInput';
import EmailInput from '../commons/EmailInput';
import PasswordInput from '../commons/PasswordInput';
import ReCAPTCHA from 'react-google-recaptcha';
import { site_key } from '../../config/config';
import { account_types } from '../../config/dropdown_data';


const Register_step_one = () => {
    //* account type State
    const [account_type, setAccount_type] = useState('clinica');

    //* Email State
    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState({ text: '', error: false, animation: false });

    //* Password State
    const [password, setPassword] = useState('');
    const [passwordMessage, setPasswordMessage] = useState({ text: '', error: false, animation: false });
    const [confirPwd, setConfirPwd] = useState('');
    const [confirPwdMessage, setConfirPwdMessage] = useState({ text: '', error: false, animation: false });

    const [isHuman, setIsHuman] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault()
        alert("Form Submitted")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-5 mt-3 mx-auto">
                    <form onSubmit={onSubmitHandler}>
                        <DropdownInput
                            value={account_type}
                            options={account_types}
                            onChange={(e) => setAccount_type(e.value)}
                        />

                        <EmailInput
                            email={email}
                            setEmail={setEmail}
                            emailMessage={emailMessage}
                            setEmailMessage={setEmailMessage}
                            placeholder="Ingrese su correo electronico"
                        />

                        <PasswordInput
                            password={password}
                            setPassword={setPassword}
                            passwordMessage={passwordMessage}
                            setPasswordMessage={setPasswordMessage}
                            confirPwd={confirPwd}
                            setConfirPwd={setConfirPwd}
                            confirPwdMessage={confirPwdMessage}
                            setConfirPwdMessage={setConfirPwdMessage}
                        />

                        <div className="mx-auto mb-3 d-flex justify-content-center captcha">
                            <ReCAPTCHA sitekey={site_key} onChange={value => setIsHuman(value ? true : false)} />
                        </div>

                        <div className="btn-container mx-auto mb-3 d-flex justify-content-center captcha">
                            <button className="btn btn-primary">Crear cuenta</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register_step_one
