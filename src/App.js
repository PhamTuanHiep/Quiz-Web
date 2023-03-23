import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const App = () => {
  // const count = useSelector((state) => state.counter.count);
  //stateRedux => call Reducer => state's reducer
  // const dispatch = useDispatch();
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container"></div>
      <div className="sidenav-container"></div>
      <div className="app-content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;
