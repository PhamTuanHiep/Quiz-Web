import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

import { useDispatch, useSelector } from "react-redux";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO-jFbm2QmA7dJn20_XUEFUhR_1rKmqb0",
  authDomain: "quiz-app-45a26.firebaseapp.com",
  projectId: "quiz-app-45a26",
  storageBucket: "quiz-app-45a26.appspot.com",
  messagingSenderId: "52032644542",
  appId: "1:52032644542:web:5e59403caaab0c27ff45ef",
  measurementId: "G-R94FN7HTQG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container"></div>
      <div className="sidenav-container"></div>
      <div className="app-content">
        <PerfectScrollbar>
          <Outlet />
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default App;
