import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const reduxStore = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={reduxStore}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App />

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
