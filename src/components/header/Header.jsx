// React
import { Link, NavLink } from "react-router"
import { useContext } from "react"
// Logo
import VocabVaultLogo from "../../assets/vocabvault_logo.png"
// Styles
import styles from "./Header.module.css"
// Context
import { UserContext } from "../../context/UserContext"
import { MenuContext } from "../../context/MenuContext"

export default function Header({ onHandleClick }) {
  // Represents the current user
  const { user } = useContext(UserContext)
  // Represents the menu state (if open or closed)
  const menuIsExpanded = useContext(MenuContext)

  const handleKeyDown = e => {
    // Allow for users to toggle hamburger with keyboard
    if (e.code !== "Enter") return
    onHandleClick()
  }

  return (
    <header className={[styles.headerWrapper, "setPaddingInline"].join(" ")}>
      <Link to="/" className={styles.logoLink}>
        <img
          src={VocabVaultLogo}
          alt="VocabVault logo"
          className={styles.headerLogo}
        />
      </Link>
      <nav
        aria-label="Primary"
        className={
          menuIsExpanded ? [styles.nav, styles.expanded].join(" ") : styles.nav
        }
      >
        <menu className={styles.headerMenu}>
          <li>
            <NavLink to="/" className={styles.headerLinks}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className={styles.headerLinks}>
              About
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="search" className={styles.headerLinks}>
                Search
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="contact" className={styles.headerLinks}>
              Contact
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="userdetails" className={styles.headerLinks}>
                {user.name}
              </NavLink>
            </li>
          )}
          {/* Only show link to users who are not logged in */}
          {!user && (
            <li>
              <NavLink to="login" className={styles.headerLinks}>
                Login
              </NavLink>
            </li>
          )}
        </menu>
      </nav>
      <div
        // Rotate hamburger icon if nav menu is expanded on smaller screens
        className={[styles.hamburger, menuIsExpanded ? styles.rotate : styles.restoreRotation].join(" ")}
        role="button"
        tabIndex="0"
        onClick={onHandleClick}
        onKeyDown={handleKeyDown}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </header>
  );
}
