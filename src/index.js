import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
);

