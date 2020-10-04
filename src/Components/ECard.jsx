import React from 'react';
import styles from './ECard.module.css';

export default function ECard(props) {
  return (
    <div className={styles.eCardContainer}>
      <div className={styles.iconContainer}>
        <span className={props.icon}></span>
      </div>
      <div className={styles.cardInfo}>
          <span className={styles.infoHeading}>{props.heading}</span>
          <span className={styles.infoText}>{props.text}</span>
      </div>
    </div>
  )
}
