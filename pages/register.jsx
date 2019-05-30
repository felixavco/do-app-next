import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import './scss/register.scss';

//* Steps components
import RegisterForm from '../components/auth/register/RegisterForm';
//* Redux
import { connect } from 'react-redux';


const register = ({isAuthenticated}) => {

    useEffect(() => {
        if(isAuthenticated) {
            setActiveIndex(1)
        }
    }, [isAuthenticated])


    return (
        <Layout>
            <section className="register">
                <div className="container-fluid step_one">
                    <RegisterForm />
                </div>
            </section>
        </Layout>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {})(register)
