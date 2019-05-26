import Layout from '../components/Layout';

const login = (props) => {
    console.log(props)
    return (
        <Layout>
            <div className="container">
                <form>
                    <h2 className="text-center mt-4 mb-3">Iniciar Sesión</h2>


                </form>
            </div>
        </Layout>
    )
}

export default login
