import React from 'react';
import Search from '../Search/Search';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h3 className={styles.title}>Forecast</h3>
      <Search />
    </header>
  );
};

export default Header;
