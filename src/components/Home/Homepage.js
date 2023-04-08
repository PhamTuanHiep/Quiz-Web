import videoHomepage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">{t("homepage.title1")}</div>
        <div className="title-2">
          {t("homepage.title2")}
          {/* You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy. */}
        </div>
        <div className="title-3">
          {isAuthenticated === false ? (
            <button onClick={() => navigate("./login")}>
              {t("homepage.title3.login")}
            </button>
          ) : (
            <button onClick={() => navigate("./users")}>
              {" "}
              {t("homepage.title3.users")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
