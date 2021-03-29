import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import "./ExchangeSession.css";
import Exchange from "./Exchange/Exchange";
class ExchangeSession extends Component {
  render() {
    return (
      <Aux>
        <div className="container Exchange">
          <h2 className="d-none d-md-block">
            <span>Nạp tiền</span> lên sàn RikVip
            <br />
            đơn giản hơn bao giờ hết{" "}
          </h2>
          <Exchange />
        </div>
      </Aux>
    );
  }
}

export default ExchangeSession;
