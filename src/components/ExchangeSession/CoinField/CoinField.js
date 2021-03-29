import "./CoinField.css";
import Aux from "../../../hoc/Aux";
const coinField = (props) => {
  const imgPart = props.iconPath ? (
    <img src={props.iconPath} alt="icon" />
  ) : null;
  return (
    <div className="CoinField">
      <div className="InputTitle">
        <span>{props.title}</span>
      </div>
      <div className="InputContainer">
        <input className="CoinInput" placeholder="1.0" type="number"></input>
        <div className="CoinGroup">
          {imgPart}
          <span>{props.coinName}</span>
        </div>
      </div>
    </div>
  );
};
export default coinField;
