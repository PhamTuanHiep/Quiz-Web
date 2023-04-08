import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/apiService";
import { toast } from "react-toastify";
import { doLogout } from "../../redux/action/userAction";
import { DiReact } from "react-icons/di";
import Language from "./Language";
import { useTranslation } from "react-i18next";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const account = useSelector((state) => state.user.account);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogOut = async () => {
    let rs = await logout(account.email, account.refresh_token);
    if (rs && rs.EC === 0) {
      //clear data redux
      dispatch(doLogout());
      navigate("/login");
    } else {
      toast.error(rs.EM);
    }
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">Hỏi dân IT</Navbar.Brand> */}
        <NavLink to="/" className="navbar-brand">
          <DiReact className="brand-icon" />
          {t("header.navbar-brand")}
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              {t("header.basic-navbar-nav.nav-link1")}
            </NavLink>
            <NavLink to="/users" className="nav-link">
              {t("header.basic-navbar-nav.nav-link2")}
            </NavLink>
            <NavLink to="/admins" className="nav-link">
              {t("header.basic-navbar-nav.nav-link3")}
            </NavLink>
          </Nav>

          <Nav>
            {isAuthenticated === false ? (
              <>
                <button className="btn-login" onClick={() => handleLogin()}>
                  {t("header.basic-navbar-nav.btn-login")}
                </button>
                <button className="btn-signup" onClick={() => handleRegister()}>
                  {t("header.basic-navbar-nav.btn-signup")}
                </button>
              </>
            ) : (
              <NavDropdown
                title={t("header.basic-navbar-nav.Settings")}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  {t("header.basic-navbar-nav.basic-nav-dropdown.profile")}
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleLogOut()}>
                  {t("header.basic-navbar-nav.basic-nav-dropdown.logout")}
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <Language />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
