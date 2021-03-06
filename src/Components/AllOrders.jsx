import React from 'react';
import styles from './AllOrders.module.css';

import { Link } from 'react-router-dom';
import AllDoctorOrders from './AllDoctorOrders';
import Calendar from 'react-calendar';

import arrow from '../arrow.png';

export default function AllOrders() {
  return (
    <div className={styles.allOrdersContainer}>
      <Link className={styles.customLink} to="/profile"><img src={arrow} alt="Arrow Back"></img> Мои записи</Link>
      <div className={styles.mainContainer}>
        <AllDoctorOrders />
        <Calendar locale="ru-RU" minDetail="month" calendarType="ISO 8601" />
      </div>
    </div>
  )
}
