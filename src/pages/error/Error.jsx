// React
import { Link } from "react-router"
// Styles
import styles from "./Error.module.css"

export default function Error() {
  return (
    <div className={[styles.errorWrapper, "section"].join(" ")}>
      <div>
        <p className={styles.errorText}>
          Page not found.&nbsp;
          <Link to="/" className={styles.errorLink} replace>
            Back to home?
          </Link>
        </p>
      </div>
    </div>
  );
}
