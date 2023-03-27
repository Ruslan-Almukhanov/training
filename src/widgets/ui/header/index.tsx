import React from "react";
import MenuLink from "@component/shared/ui/menu-link";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <MenuLink text="Home" link="/" />
        </li>
        <li>
          <MenuLink text="Categories" link="/categories" />
        </li>
        <li>
          <MenuLink text="Products" link="/products" />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
