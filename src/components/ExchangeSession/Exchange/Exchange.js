import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import iconArrow from "../../../assets/images/ic_arrow.svg";
import "./Exchange.css";
class Exchange extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-5">
            <div>Bạn gửi</div>
            <div></div>
          </div>
          <div className="col-2">
            <img src={iconArrow} alt="change" />
          </div>
          <div className="col-5">
            <div>Bạn sẽ nhận</div>
          </div>
        </div>
        <Button>Primary</Button>
      </div>
    );
  }
}
export default Exchange;
