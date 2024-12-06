// Styles
import styles from "./Footer.module.css"

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className={[styles.footerWrapper, "setPaddingInline"].join(" ")}>
      <p>VocabVault &copy; {currentYear} | All Rights Reserved</p>
    </footer>
  );
}
