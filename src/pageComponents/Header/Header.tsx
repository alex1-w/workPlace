import styles from "./Header.module.scss";
import React from "react";
import Navigation from "./Navigation/Navigation";
import { Logo } from "@/components/Logo/Logo";
import BurgerMenu from "@/components/UI/BurgerMenu/BurgerMenu";
import Authorizations from "@/components/Authorizations/Authorizations";

export default function Header() {
  return (
    <header className={styles.main}>
      <Logo />

      <Navigation />
      <Authorizations />

      <BurgerMenu />
    </header>
  );
}
