// React
import { Link, NavLink } from "react-router"
import { useContext } from "react";
// Logo
import VocabVaultLogo from "../../assets/vocabvault_logo.png"
// Styles
import styles from "./Header.module.css"
// Context
import { UserContext } from "../../context/UserContext";

export default function Header() {
  // Represents the current user
  const { user } = useContext(UserContext)
  return (
    <header className={[styles.headerWrapper, "setPaddingInline"].join(" ")}>
      <Link to="/">
        <img
          src={VocabVaultLogo}
          alt="VocabVault logo"
          className={styles.headerLogo}
        />
      </Link>
      <nav aria-label="Primary">
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
    </header>
  );
}
