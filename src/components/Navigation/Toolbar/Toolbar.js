import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "bootstrap/dist/css/bootstrap.min.css";

import Wallet from "../Wallet/Wallet";
const toolbar = (props) => {
  return (
    <div className="Toolbar">
      <div className="Navigate">
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
      <div className="d-none d-md-block">
        <Wallet />
      </div>
    </div>
  );
};
export default toolbar;
