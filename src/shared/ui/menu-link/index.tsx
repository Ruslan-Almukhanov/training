import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
export interface MenuLink {
  text: string;
  link: string;
}

const MenuLink = ({ text, link }: MenuLink) => {
  return (
    <Link className={styles["menu-link"]} href={link}>
      {text}
    </Link>
  );
};

export default MenuLink;
