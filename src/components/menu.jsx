import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/Menu.module.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={styles.menuContainer}>
        <h1 className={styles.pageIcon}>dsmb.</h1>
        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span className={styles.menuToggleIcon}>☰</span>
          <span>Menu</span>
        </button>

        <nav
          id="main-navigation"
          className={`${styles.navContainer} ${menuOpen ? styles.open : ""}`}
        >
          <NavLink
            className={({ isActive }) =>
              `${styles.menuItems} ${isActive ? styles.active : ""}`
            }
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.menuItems} ${isActive ? styles.active : ""}`
            }
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.menuItems} ${isActive ? styles.active : ""}`
            }
            to="/projects"
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.menuItems} ${isActive ? styles.active : ""}`
            }
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Menu;
