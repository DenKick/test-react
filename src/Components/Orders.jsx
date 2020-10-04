import React from 'react';
import styles from './Orders.module.css';

import OrderContainer from './OrderContainer';

export default function Orders() {
  return (
    <div className={styles.ordersContainer}>
      <span className={styles.ordersHeading}>Записи на приём</span>
      <div className={styles.orders}>
        <OrderContainer id="0" />
        <OrderContainer id="1" />
      </div>
    </div>
  )
}
