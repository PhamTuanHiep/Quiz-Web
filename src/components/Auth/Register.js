import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { postRegister } from "../../services/apiService";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Register.scss";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isShowPassword, setIsShowPassword] = useState("password");
  const navigate = useNavigate();

  const handleRegister = async () => {
    //validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }

    if (!password) {
      toast.error("Invalid password");
      return;
    }
    //submit apis
    let data = await postRegister(email, password, username);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      navigate("/Login");
    }
    if (data && +data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const togglePassword = () => {
    if (isShowPassword === "password") {
      setIsShowPassword("text");
      return;
    }
    setIsShowPassword("password");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="signup-container">
      <div className="header">
        Don't have an account yet ?
        <button onClick={() => handleLogin()}>Sign in</button>
      </div>
      <div className="title col-4 mx-auto">Sign Up</div>
      <div className="welcom col-4 mx-auto">Hello, who's this ?</div>
      <div className=" content-form col-4 mx-auto">
        <div className="form-group ">
          <label>Email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group pass-group">
          <label>Password</label>
          <input
            type={isShowPassword}
            className="form-control "
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="icon-eye" onClick={togglePassword}>
            {isShowPassword === "password" ? (
              <span>
                <AiFillEyeInvisible />
              </span>
            ) : (
              <span>
                <AiFillEye />
              </span>
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type={"text"}
            className="form-control"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          {/* </div>
        <span className="forgot-password">Forgot password ?</span>
        <div> */}
          <button className="btn btn-primary" onClick={() => handleRegister()}>
            Create Account
          </button>
        </div>
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            &#62;&#62; Go to Homepage
          </span>
        </div>
      </div>
    </div>
  );
};
export default Register;
