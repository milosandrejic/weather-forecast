import React from "react";
import Search from "../Search/Search";
import styles from "./Header.module.scss";
import PlaceHeading from "../PlaceHeading/PlaceHeading";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h3 className={styles.title}>Forecast</h3>
        <Search />
      </nav>
      <PlaceHeading />
    </header>
  );
};

export default Header;
