import { useState, useEffect } from 'react';
import DropdownInput from '../commons/DropdownInput';
import TextInput from '../commons/TextInput';
import EmailInput from '../commons/EmailInput';
import PasswordInput from '../commons/PasswordInput';

import { account_types } from '../../config/dropdown_data';

const Register_step_one = () => {
    const [ account_type, setAccount_type] = useState('clinica');

    const [ email, setEmail ] = useState('');
	const [ emailMessage, setEmailMessage ] = useState({ text: '', error: false, animation: false });

    //* Password State
	const [ password, setPassword ] = useState('');
	const [ passwordMessage, setPasswordMessage ] = useState({ text: '', error: false, animation: false });

	const [ confirPwd, setConfirPwd ] = useState('');
	const [ confirPwdMessage, setConfirPwdMessage ] = useState({ text: '', error: false, animation: false });

    return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-5 mt-3 mx-auto">
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
                    </div>
                </div>
            </div>
    )
}

export default Register_step_one
