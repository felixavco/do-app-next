import { useEffect } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';
import './scss/register.scss';

//* Steps components
import RegisterForm from '../components/auth/register/RegisterForm';
//* Redux
import { connect } from 'react-redux';


const register = ({isAuth}) => {

    useEffect(() => {
        if(isAuth) {
            Router.push('/dashboard');
        }
    }, [isAuth])

    return (
        <Layout>
            <section className="register">
                <div className="container-fluid step_one">
                    <h1 className="display-4 text-center my-4">Crear Cuenta</h1>
                    <RegisterForm />
                </div>
            </section>
        </Layout>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {})(register)
