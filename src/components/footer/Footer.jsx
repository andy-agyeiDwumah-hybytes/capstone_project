// Styles
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={[styles.footerWrapper, "setPaddingInline"].join(" ")}>
      <p>VocabVault &copy; {new Date().getFullYear()} | All Rights Reserved</p>
    </footer>
  );
}
