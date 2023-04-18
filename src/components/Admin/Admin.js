import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import Language from "../Header/Language";
import NavDropdown from "react-bootstrap/NavDropdown";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import ModalProfile from "../Header/ModalProfile";
const Admin = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isShowModalProfile, setIsShowModalProfile] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <span onClick={() => setCollapsed(!collapsed)}>
            <FaBars className="leftside" />
          </span>
          <div className="rightside">
            <Language />
            <NavDropdown title={t("admin.Settings")} id="basic-nav-dropdown">
              <NavDropdown.Item
                className="profile"
                onClick={() => setIsShowModalProfile(true)}
              >
                {t("admin.basic-nav-dropdown.profile")}
              </NavDropdown.Item>
              <NavDropdown.Item className="logout">
                {t("admin.basic-nav-dropdown.logout")}
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <div className="admin-main">
          <PerfectScrollbar>
            <Outlet />
          </PerfectScrollbar>
        </div>
        <ModalProfile
          show={isShowModalProfile}
          setShow={setIsShowModalProfile}
        />
      </div>
    </div>
  );
};
export default Admin;
