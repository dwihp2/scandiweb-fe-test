import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { currencySwitchItems } from "./currencySwitchItems";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ReactComponent as BrandIcon } from "../../Brand icon.svg";
import "./NavBar.css";
import Select from "react-select";
import { NavLink } from "react-router-dom";

const style = {
  control: (base) => ({
    ...base,
    border: 0,
    // This line disable the blue border
    boxShadow: "none",
  }),
};

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <ul className="nav-menu" tabIndex={1}>
          <li className="nav-links">
            <NavLink to="/women">WOMEN</NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/men">MEN</NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/kids">KIDS</NavLink>
          </li>
          {/* {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })} */}
        </ul>
        <div className="brand-logo">
          <BrandIcon />
        </div>
        <div className="actionsButton">
          <div className="currency-switch">
            <Select
              defaultValue={currencySwitchItems[0]}
              options={currencySwitchItems}
              getOptionLabel={(e) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {e.icon}
                  <span style={{ marginLeft: 5 }}>{e.label}</span>
                </div>
              )}
              styles={style}
            />
          </div>
          <div className="cart-icon">
            <AiOutlineShoppingCart />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
