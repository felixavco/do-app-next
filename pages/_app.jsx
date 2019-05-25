import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

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