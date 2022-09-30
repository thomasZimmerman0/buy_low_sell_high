import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import dataReducer from './components/dataSlice'
import companyDataReducer from './components/companySpecificDataSlice'
import './index.css';
import App from './App';


export const store = configureStore({
    reducer: dataReducer, companyDataReducer,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')

);

