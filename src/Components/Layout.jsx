import React from 'react';
import styles from './Layout.module.css';

import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ pageName, children }) {
  return (
    <>
      <Header pageName={pageName} />
      <Sidebar />
      <div className={styles.mainContent}>
        { children }
      </div>
    </>
  )
}
