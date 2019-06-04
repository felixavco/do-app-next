import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { setAuthToken } from '../utils/utils';
import { setCurrentUser, logoutUser, clearCurrentProfile } from '../redux/actions/authActions';
import jwt_decode from 'jwt-decode';


import rootReducer from '../redux/reducers/rootReducer';

const initialState = {};

const middleware = [thunk];

const makeStore = (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    );
};

class MyApp extends App {
    componentDidMount() {
        if (localStorage.jwtToken) {
            //* Set auth token header auth
            setAuthToken(localStorage.jwtToken);
            //* Decode token and get user info and expiration date
            const decoded = jwt_decode(localStorage.jwtToken);
            // set user and isAuthenticated
            this.props.store.dispatch(setCurrentUser(decoded));

            //check for expired token
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                //Logout the user
                this.props.store.dispatch(logoutUser());
                // Clear current profile
                this.props.store.dispatch(clearCurrentProfile());
                //Redirect to login
                window.location.href = '/login';
            }
        }
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);