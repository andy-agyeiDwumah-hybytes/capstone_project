// React
import { Link } from "react-router";
// Styles
import styles from "./Error.module.css"

export default function Error() {
  return (
    <div className={styles.errorWrapper}>
      <p>
        Page not found. <Link to="/" className={styles.errorLink}>Back to home?</Link>
      </p>
    </div>
  );
}
