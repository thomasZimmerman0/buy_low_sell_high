import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'
import { store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import './index.css';
import App from './App';
import RenderBuys from './components/RenderBuys';
import RenderSells from './components/RenderSells';
import StockDetails from './components/StockDetails'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout'

import 'bootstrap/dist/css/bootstrap.min.css';

let persistor = persistStore(store)


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                    <Routes>
                        <Route path="/" element={<App />}/>
                        <Route path="/buy" element={<BaseLayout><RenderBuys /></BaseLayout>}/>
                        <Route path="/sell" element={<BaseLayout><RenderSells /></BaseLayout>}/>
                        <Route path="/stockDetails" element={<BaseLayout><StockDetails /></BaseLayout>}/>
                    </Routes>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')

);

