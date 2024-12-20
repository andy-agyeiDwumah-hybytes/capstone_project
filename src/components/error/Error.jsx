// React
import { Link } from "react-router"
// Styles
import styles from "./Error.module.css"

export default function Error() {
  return (
    <div className={styles.errorWrapper}>
      <div>
        <p className={styles.errorText}>
          Page not found.&nbsp;
          <Link to="/" className={styles.errorLink}>
            Back to home?
          </Link>
        </p>
      </div>
    </div>
  );
}
