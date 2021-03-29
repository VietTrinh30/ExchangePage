import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
import Wallet from "../Navigation/Wallet/Wallet";
import ExchangeSession from "../ExchangeSession/ExchangeSession";
class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <ExchangeSession />
        <div className="d-md-none d-block WalletMobile">
          <Wallet />
        </div>
      </Aux>
    );
  }
}

export default Layout;
