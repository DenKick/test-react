import React from 'react';
import styles from './AllDoctorOrders.module.css';

import doctorsApi from './doctorsAPI';
import OrderContainer from './OrderContainer';

export default function AllDoctorOrders() {
  let arr = Object.values(doctorsApi);
  console.log(arr);

  return (
    <div className={styles.allDoctorOrdersContainer}>
      {
        arr.map((item, i) =>
          <OrderContainer id={i} />
        )
      }
    </div>
  )
}
