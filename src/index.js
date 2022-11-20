import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { configureStore } from 'redux'
// import {createStore} from "redux"
// import blockchainReducer from 'redux/blockchain/blockchainReducer.js'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'


import store from 'redux/store.js'

// const store = createStore(
//       blockchainReducer,
//       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}> 
  <React.StrictMode>
    {/* <Provider> */}
    
       <App />
    
    {/* </Provider> */}
  </React.StrictMode>
  </Provider>
);

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>  
//   ,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
