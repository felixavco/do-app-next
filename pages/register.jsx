import { useState } from 'react';
import Layout from '../components/Layout';
import StepOne from '../components/auth/Register_step_one';
import { Steps } from 'primereact/steps';

const register = () => {

    const [activeIndex, SetActiveIndex] = useState(1)

    const items = [
        {
            label: 'Datos Personales',
            command: (event) => {
                console.log("HOLA")
            }
        },
        { label: 'Contacto' },
        { label: 'Perfil' },
        { label: 'Clinica' }
    ];

    return (
        <Layout>
            <div className="container-fluid">
                <Steps model={items} activeIndex={activeIndex} onSelect={(e) => SetActiveIndex(e.index)} readOnly={false} />

                <form>
                    <StepOne/>

                </form>
            </div>
        </Layout>
    )
}

export default register
