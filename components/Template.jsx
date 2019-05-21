import Header from './header/header';
import Footer from './footer/footer';
import store from '../redux/store';
import { Provider } from 'react-redux';

const Template = ({children}) => {
    return (
        <Provider store={store}>
            <Header />
            { children }
            <Footer/>
        </Provider>
    )
}

export default Template
