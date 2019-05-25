import { useState, useEffect, Fragment } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { site_key } from '../../config/config';
import { account_types } from '../../config/dropdown_data';
import { isEmpty } from '../../utils/utils';
//* Custom components
import DropdownInput from '../commons/DropdownInput';
import EmailInput from '../commons/EmailInput';
import PasswordInput from '../commons/PasswordInput';
//* Redux
import { connect } from 'react-redux';
import { register } from '../../redux/actions/authActions';


const Register_step_one = (props) => {

    //* account type State
    const [account_type, setAccount_type] = useState('');
    const [selectMessage, setSelectMessage] = useState({ text: '', error: false, animation: false });

    //* Email State
    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState({ text: '', error: false, animation: false });

    //* Password State
    const [password, setPassword] = useState('');
    const [passwordMessage, setPasswordMessage] = useState({ text: '', error: false, animation: false });
    const [confirPwd, setConfirPwd] = useState('');
    const [confirPwdMessage, setConfirPwdMessage] = useState({ text: '', error: false, animation: false });

    const [isSending, setIsSending] = useState(false);
    //* If there is no Errors and isHuman is true, button is enabled.
    const [areFieldsValid, setAreFieldsValid] = useState(false);
    const [isHuman, setIsHuman] = useState(false);

    useEffect(
        () => {
            //* Checks if all Fields are not empty
            if (!isEmpty(account_type) && !isEmpty(email) && !isEmpty(password) && !isEmpty(confirPwd)) {
                //* Checks if there is no errors to enable submit button
                if (selectMessage.error || emailMessage.error || passwordMessage.error || confirPwdMessage.error) {
                    setAreFieldsValid(false);
                } else {
                    setAreFieldsValid(true);
                }
            } else {
                setAreFieldsValid(false);
            }
        },
        [selectMessage, emailMessage, passwordMessage, confirPwdMessage, account_type, password, email, confirPwd, isHuman]
    );

    //* button content 
    let button_content;
    if (isSending) {
        button_content = (
            <Fragment>
                Creando cuenta...&nbsp;<i className="fas fa-spinner fa-pulse" />
            </Fragment>
        );
    } else {
        button_content = (
            <Fragment>
                Crear Cuenta
			</Fragment>
        );
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setIsSending(true)
        const newUser = { account_type, email, password, password2: confirPwd }
        props.register(newUser);
        setTimeout(() => {
            setIsSending(false);
        }, 500);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-5 mt-3 mx-auto">
                    <form onSubmit={onSubmitHandler}>
                        <DropdownInput
                            account_type={account_type}
                            options={account_types}
                            setAccount_type={setAccount_type}
                            setSelectMessage={setSelectMessage}
                            selectMessage={selectMessage}
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

                        <div className="mb-3 d-flex justify-content-center captcha">
                            <ReCAPTCHA sitekey={site_key} onChange={value => setIsHuman(true)} />
                        </div>

                        <div className="btn-container d-flex justify-content-center">
                            <button
                                className={`btn btn-primary ${areFieldsValid && isHuman ? '' : 'disabled-btn'}`}
                                disabled={`${areFieldsValid && isHuman ? '' : 'disabled'}`}
                            >
                                {button_content}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { register })(Register_step_one)
