import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import './scss/register.scss';

//* Steps components
import Steps  from '../components/commons/Steps';
import StepOne from '../components/auth/register/StepOne';
import StepTwo from '../components/auth/register/StepTwo';
import StepThree from '../components/auth/register/StepThree';
//* Redux
import { connect } from 'react-redux';


const register = ({isAuthenticated}) => {

    const [activeIndex, setActiveIndex] = useState(1)

    useEffect(() => {
        if(isAuthenticated) {
            setActiveIndex(1)
        }
    }, [isAuthenticated])

    const items = [
        { label: 'Registro' },
        { label: 'Informacion Personal' },
        { label: 'Clinica' },
    ];

    return (
        <Layout>
            <section className="register">
                <div className="container-fluid">
                    <Steps elements={items} activeElement={activeIndex} />
                    <div style={{display: activeIndex === 0 ? 'block' : 'none'}} className="step_one">
                        <StepOne />
                    </div>

                    <div style={{display: activeIndex === 1 ? 'block' : 'none'}} className="step_two">
                        <StepTwo />
                    </div>

                    <div style={{display: activeIndex === 2 ? 'block' : 'none'}} className="step_three">
                        <StepThree />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {})(register)
