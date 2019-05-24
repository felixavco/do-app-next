import { useState, useEffect } from 'react';
import DropdownInput from '../commons/DropdownInput';
import TextInput from '../commons/TextInput';
import EmailInput from '../commons/EmailInput';

import { account_types } from '../../config/dropdown_data';

const Register_step_one = () => {
    const [ email, setEmail ] = useState('');
	const [ emailMessage, setEmailMessage ] = useState({ text: '', error: false, animation: false });

    const [ account_type, setAccount_type] = useState('');



    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-5 mt-3 mx-auto">
                    <DropdownInput
                        value={account_type}
                        options={account_types}
                        onChange={(e) => setAccount_type(e.value)}
                        label="Selecione el tipo de cuenta"
                    />



                    <EmailInput
                        email={email}
                        setEmail={setEmail}
                        emailMessage={emailMessage}
                        setEmailMessage={setEmailMessage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Register_step_one
