import React from 'react';
import styles from './ECard.module.css';

export default function PacientInfo() {
  return (
    <div className={styles.eCardContainer}>
      <div className={styles.iconContainer}>
        <span className="icon-PacientInfo"></span>
      </div>
      <div className={styles.cardInfo}>
          <span className={styles.infoHeading}>Информация о пациенте</span>
          <span className={styles.infoText}>
            <ul>
              <li><span>Ваши личные данные</span></li>
              <li><span>Рекомендации врачей</span></li>
              <li><span>История болезней</span></li>
            </ul>
          </span>
      </div>
    </div>
  )
}
