import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
import Wallet from "../Navigation/Wallet/Wallet";
import ExchangeSession from "../ExchangeSession/ExchangeSession";
import RemindLink from "../RemindLink/RemindLink";
class Layout extends Component {
  render() {
    return (
      <Aux>
        <RemindLink link="https://google.com" />
        <Toolbar />
        <ExchangeSession />
        <div className="d-md-none d-block WalletMobile">
          <Wallet />
        </div>
        <div>
          Hiện tại LuckyBlock chỉ có duy nhất một trang, mọi chi nhánh khác đều
          là giả mạo và LuckyBlock không chịu trách nhiệm nếu có sự cố xảy ra.
          Xin chân thành cảm ơn
        </div>
      </Aux>
    );
  }
}

export default Layout;
