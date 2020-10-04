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
          <span className="icon-profile"><span className={styles.linkFont}> Профиль</span></span>
        </NavLink>
        <NavLink className={styles.sidebarLink} activeClassName={styles.activeLink} to="/doctors">
          <span className="icon-doctors"><span className={styles.linkFont}> Врачи и клиники</span></span>
        </NavLink>
        <NavLink className={styles.sidebarLink} activeClassName={styles.activeLink} to="/messages">
          <span className="icon-messages"><span className={styles.linkFont}> Сообщения</span></span>
        </NavLink>
        <NavLink className={styles.sidebarLink} activeClassName={styles.activeLink} to="/testing">
          <span className="icon-test"><span className={styles.linkFont}> Тестирование</span></span>
        </NavLink>
        <NavLink className={styles.sidebarLink} activeClassName={styles.activeLink} to="/knowledge">
          <span className="icon-knowledge"><span className={styles.linkFont}> Полезно знать</span></span>
        </NavLink>
      </div>
      <div className={styles.help}>
        <NavLink className={styles.sidebarLink} activeClassName={styles.activeLink} to="/help">
          <span className="icon-Help"><span className={styles.linkFont}> Помощь</span></span>
        </NavLink>
        <img  className={styles.sidebarLogoImg} src={logo} alt="Logo"></img>
      </div>
    </nav>
  )
}
