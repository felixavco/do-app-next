import { useEffect } from 'react';
import Layout from '../components/Layout';
import Router from 'next/router';
//* Redux
import { connect } from 'react-redux';

const login = ({ isAuth }) => {

    useEffect(() => {
        if (isAuth) {
            Router.push('/dashboard');
        }
    }, [isAuth])

    return (
        <Layout>
            <div className="container">
                <form>
                    <h1 className="display-4 text-center my-4">Iniciar Sesión</h1>
                        {isAuth ? <h3>TRUE</h3> : <h3>FALSE</h3>}

                </form>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {})(login)

