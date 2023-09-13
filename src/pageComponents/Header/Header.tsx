import styles from "./Header.module.scss";
import React from "react";
import logo from "@/icons/Logo.svg";
import { logoIcon } from "@/icons/icons";
import Navigation from "./Navigation/Navigation";
import Authorizations from "./Authorizations/Authorizations";

export default function Header() {
  return (
    <header className={styles.main}>
      {logoIcon}
      <Navigation />
      <Authorizations />
    </header>
  );
}
