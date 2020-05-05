import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundry from './components/error-boundry';
import {BookstoreServiceProvider} from './components/bookstore-service-context';
import store from './store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';
import BookstoreService from './services/bookstore-service';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService} >
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>    ,
    document.getElementById('root'));