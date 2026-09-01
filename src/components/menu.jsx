import { NavLink } from "react-router-dom";
import styles from "../styles/Menu.module.css";

function Menu() {
  return (
    <>
      <div className={styles.menuContainer}>
        <h1 className={styles.pageIcon}>dsmb.</h1>
        <nav className={styles.navContainer}>
          <NavLink className={({ isActive }) =>
              `${styles.menuItems} ${isActive ? styles.active : ""}`
            } to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.menuItems} ${isActive ? styles.active : ""}`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink className={({ isActive }) =>
              `${styles.menuItems} ${isActive ? styles.active : ""}`
            } to="/projects">
            Projects
          </NavLink>
          <NavLink className={({ isActive }) =>
              `${styles.menuItems} ${isActive ? styles.active : ""}`
            } to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Menu;
