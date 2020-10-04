import React from 'react';
import styles from './ECardsContainer.module.css';

import ECard from './ECard';
import PacientInfo from './PacientInfo';

export default function ECardsContainer() {
  return (
    <div className={styles.eCardsContainer}>
      <span className={styles.eCardsHeading}>Электронная карта</span>
      <div className={styles.eCards}>
        <PacientInfo />
        <ECard icon="icon-Analyses" heading="Результаты анализов" text="Вы можете узнать здесь результаты своих анализов" />
        <ECard icon="icon-AddInfo" heading="Добавить информацию" text="Добавляйте в свою электронную медицинскую карту новые данные" />
        <ECard icon="icon-History" heading="История приемов" text="Вся информация о полученных услугах за все время хранится здесь" />
      </div>
    </div>
  )
}
