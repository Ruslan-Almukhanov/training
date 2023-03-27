import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Layout, Menu, MenuProps } from "antd";
import { useRouter } from "next/router";
import MenuLink from "@component/shared/menu-link/ui";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Categories",
    key: "/categories",
  },
  {
    label: "Products",
    key: "/products",
  },
];

const Header = () => {
  const [current, setCurrent] = useState("home");
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <header>
      <Image src={"/logo.webp"} alt={"Logo"} width={113} height={84}></Image>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        className={styles.nav}
      >
        <li>
          <MenuLink text="Home" link="/" />
        </li>
        <li>
          <MenuLink text="Categories" link="/categories" />
        </li>
        <li>
          <MenuLink text="Products" link="/products" />
        </li>
      </Menu>
    </header>
  );
};

export default Header;
