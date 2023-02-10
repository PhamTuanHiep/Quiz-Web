import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './store/reducers/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/User/User';
import Admin from './components/Admin/Admin';

// const reduxStore = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='users' element={<User />}></Route>
        <Route path='admins' element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
