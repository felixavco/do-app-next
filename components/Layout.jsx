import Head from 'next/head';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/static/favicon.ico" />
                <link rel="stylesheet" href="./bootstrap/bootstrap.min.css"/>
                <link rel="stylesheet" href="./primefaces-react/resources/themes/nova-light/theme.css" />
                <link rel="stylesheet" href="./primefaces-react/resources/primereact.min.css" />
                <link rel="stylesheet" href="./primefaces-react/primeicons/primeicons.css" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;
