import React from 'react';
import styles from './Orders.module.css';

import OrderContainer from './OrderContainer';
import ElseOrders from './ElseOrders';

import doctors from './doctorsAPI';

export default function Orders() {
  return (
    <div className={styles.ordersContainer}>
      <span className={styles.ordersHeading}>Записи на приём</span>
      <div className={styles.orders}>
        <OrderContainer id="0" />
        <OrderContainer id="1" />
        <ElseOrders left={Object.keys(doctors).length - 2} />
      </div>
    </div>
  )
}
