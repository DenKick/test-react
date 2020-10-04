import React from 'react';
import styles from './OrderContainer.module.css';

import DoctorCard from './DoctorCard';

import doctors from './doctorsAPI';

export default function OrderContainer({ id }) {
  let optionsDate = { day: 'numeric', month: 'numeric', year: 'numeric' }
  let optionsDay = { weekday: 'long' };
  let optionsTime = {  hour: 'numeric', minute: 'numeric'  }

  let date = doctors[id].date;

  let dayString = date.toLocaleString('ru-RU', optionsDay);
  let dateStrng = date.toLocaleString('ru-RU', optionsDate);
  let timeString = date.toLocaleString('ru-RU', optionsTime);

  let dateFinalString = `${dayString} ${dateStrng} | ${timeString}`;

  return (
    <div className={styles.orderContainer}>
      <span className={styles.orderDate}>{dateFinalString}</span>
      <span className={styles.orderAddress}>{doctors[id].place}</span>
      <DoctorCard doctor={doctors[id]}/>
    </div>
  )
}
