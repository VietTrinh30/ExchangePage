import alertPath from "../../assets/images/alert.svg";
import closePath from "../../assets/images/alert.svg";
import "./RemindLink.css";
const remindLink = (props) => (
  <div className="RemindLink">
    <div>
      <img src={alertPath} />
      <span>
        Always make sure the URL is {props.link}- bookmark it to be safe
      </span>
    </div>

    <img className="Close" src={closePath} alt="close" />
  </div>
);
export default remindLink;
