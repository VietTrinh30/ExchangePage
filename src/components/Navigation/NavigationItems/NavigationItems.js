import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/" active>
      Đại Lý
    </NavigationItem>
    <NavigationItem link="/" active>
      Trở thành Đại Lý
    </NavigationItem>
  </ul>
);
export default navigationItems;
