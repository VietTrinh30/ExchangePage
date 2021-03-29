import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import "./ExchangeSession.css";
import Exchange from "./Exchange/Exchange";
class ExchangeSession extends Component {
  render() {
    return (
      <Aux>
        <div className="container ExchangeSession">
          <h2 className="d-none d-md-block">
            Mua / Bán XU chơi game <span>LuckyBlock</span>
            <br />
            Tức Thì, Bảo Mật, Tự Động 24/7
          </h2>
          <Exchange />
        </div>
      </Aux>
    );
  }
}

export default ExchangeSession;
