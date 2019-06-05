import Layout from '../Layout';
import './dashboardLayout.scss';

const DashboardLayout = ({ children }) => {
    return (
        <Layout>
            <div className="dashboard active">
                <div className="dashboard_side-menu bg-success">
                    A
                </div>
                <div className="dashboard_main bg-info">
                    {children}
                </div>
            </div>
        </Layout>
    )
}

export default DashboardLayout;
