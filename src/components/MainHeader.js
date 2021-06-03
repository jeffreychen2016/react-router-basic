import React from "react";
// the `Link` component will prevent browser default
// (which is refresh the page when navigate to other component route)
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            {/* <a href="/products">Products</a> */}
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
