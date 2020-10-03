import React from 'react';
import styles from './Header.module.css';
import avatar from '../avatar.png';

export default function Header({ pageName }) {
  return (
    <header className={styles.headerContainer}>
      <span className={styles.pageName}>{pageName}</span>
      <div className={styles.profile}>
        <span className="icon-search"></span>
        <span className="icon-notifications"></span>
        <span className="icon-eye"></span>
        <img src={avatar} alt="User's avatar"></img>
        <span className={styles.iconArrow + " icon-arrow"}></span>
      </div>
    </header>
  )
}
