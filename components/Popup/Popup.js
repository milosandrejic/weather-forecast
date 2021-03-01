import React from 'react';
import styles from './Popup.module.scss';

const Popup = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <p className={styles.text}>City not found</p>
        <button type="button" className={styles.btn}>
          OK
        </button>
      </div>
    </div>
  );
};

export default Popup;
