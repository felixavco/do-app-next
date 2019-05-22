import Header from './header/header';
import Footer from './footer/footer';


const Template = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Template
