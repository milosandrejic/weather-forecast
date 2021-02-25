import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.searchForm} placeholder="Search place" />
      <ul className={styles.searchResultList}>
        <li className={styles.searchResultListItem}>London</li>
      </ul>
    </div>
  );
};

export default Search;
