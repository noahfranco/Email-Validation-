import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux Imports 
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk "
import { Reducer } from "./reducer/Reducer.js"
// Redux Imports 

const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
<Provider>
<App />
</Provider>, 
document.getElementById('root'));

// serviceWorker.unregister();
