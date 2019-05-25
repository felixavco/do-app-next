import Head from 'next/head';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/static/favicon.ico" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
                <link rel="stylesheet" href="./bootstrap/bootstrap.min.css"/>
                <link rel="stylesheet" href="./primeReact/resources/themes/nova-light/theme.css" />
                <link rel="stylesheet" href="./primeReact/resources/primereact.min.css" />
                <link rel="stylesheet" href="./primeReact/primeicons/primeicons.css" />
            </Head>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;
