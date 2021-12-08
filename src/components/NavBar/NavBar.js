import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { currencySwitch } from "./currencySwitch";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ReactComponent as BrandIcon } from "../../Brand icon.svg";
import "./NavBar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="brand-logo">
          <BrandIcon />
        </div>
        <div className="actionsButton">
          <div className="currency-switch"></div>
          <div className="cart-icon">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
