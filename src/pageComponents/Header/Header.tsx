import styles from "./Header.module.scss";
import React from "react";
import Navigation from "./Navigation/Navigation";
import Authorizations from "./Authorizations/Authorizations";
import { Logo } from "@/components/Logo/Logo";

export default function Header() {
  return (
    <header className={styles.main}>
      <Logo />
      <Navigation />
      <Authorizations />
    </header>
  );
}
