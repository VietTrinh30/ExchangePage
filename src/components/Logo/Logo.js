import "./Logo.css";
import appLogo from "../../assets/images/app_icon.png";
const logo = (props) => (
  <div className="Logo">
    <img src={appLogo} alt="Web logo"></img>
  </div>
);
export default logo;
