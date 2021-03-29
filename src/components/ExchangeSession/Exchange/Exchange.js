import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import icUsdt from "../../../assets/images/ic_usdt.svg";
import iconArrow from "../../../assets/images/ic_arrow.svg";
import "./Exchange.css";
import CoinField from "../CoinField/CoinField";
class Exchange extends Component {
  render() {
    return (
      <div className="Exchange">
        <div className="row">
          <div className="col-5">
            <CoinField coinName="USDT" title="Bạn gửi" iconPath={icUsdt} />
          </div>
          <div className="col-2">
            <div className="Arrow">
              <img src={iconArrow} alt="change" />
            </div>
          </div>
          <div className="col-5">
            <CoinField coinName="XU" title="Bạn sẽ nhận" />
          </div>
        </div>
        {/* <Button>Primary</Button> */}
      </div>
    );
  }
}
export default Exchange;
