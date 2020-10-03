import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import logo from '../logo.png';

export default function Sidebar() {
  return (
    <nav className={styles.sidebarContainer}>
      <div className={styles.linkContainer}>
        <span className={styles.sidebarLogo}>Логотип</span>
        <NavLink className={styles.sidebarLink} activeClassName={styles.activeLink} to="/profile">
          <span className="icon-profile"> Профиль</span>
        </NavLink>
        <NavLink className={styles.sidebarLink} activeClassName={styles.activeLink} to="/doctors">
          <span className="icon-doctors"> Врачи и клиники</span>
        </NavLink>
        <NavLink className={styles.sidebarLink} activeClassName={styles.activeLink} to="/messages">
          <span className="icon-messages"> Сообщения</span>
        </NavLink>
        <NavLink className={styles.sidebarLink} activeClassName={styles.activeLink} to="/testing">
          <span className="icon-test"> Тестирование</span>
        </NavLink>
        <NavLink className={styles.sidebarLink} activeClassName={styles.activeLink} to="/knowledge">
          <span className="icon-knowledge"> Полезно знать</span>
        </NavLink>
      </div>
      <div className={styles.help}>
        <NavLink className={styles.sidebarLink} activeClassName={styles.activeLink} to="/help">
          <span className="icon-Help"> Помощь</span>
        </NavLink>
        <img  className={styles.sidebarLogoImg} src={logo} alt="Logo"></img>
      </div>
    </nav>
  )
}
