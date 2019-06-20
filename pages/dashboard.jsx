import { useEffect, useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout'

import { connect } from 'react-redux';
import Router from 'next/router';


const dashboard = ({ isAuthenticated }) => {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {
            Router.push('/login');
        } else {
            setIsAuth(true)
        }
    }, [isAuthenticated])

    let content;

    if (isAuth) {
        content = (
            <DashboardLayout>
                <h1>Dashboard</h1>
            </DashboardLayout>
        )
    }

    return (
        { content }
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {})(dashboard)
