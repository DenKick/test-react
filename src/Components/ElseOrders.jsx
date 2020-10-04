import React from 'react';
import styles from './ElseOrders.module.css';

import { Link } from 'react-router-dom';

export default function ElseOrders(props) {
  return (
    <div className={styles.elseOrdersContainer}>
      <span>Ещё {props.left} записи</span>
      <Link to="/profile/orders">Подробнее</Link>
    </div>
  )
}
