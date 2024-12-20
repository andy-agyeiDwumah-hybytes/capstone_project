// React
import { Helmet } from "react-helmet-async";
import {useNavigate } from "react-router"
// Styles
import styles from "./Home.module.css"

export default function Home() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("login")
    return
  }

  return (
    <>
      <Helmet>
        <title>Home | VocabVault</title>
      </Helmet>
      <section
        aria-labelledby="home"
        className={styles.hero}
      >
        <div className={styles.textContentWrapper}>
          <h1 id="home" className={styles.heading}>VocabVault</h1>
          <p className={styles.para}>Join 1,200+ users improving their vocabulary today!</p>
          <div>
            <button
              type="button"
              className={styles.heroBtn}
              onClick={handleClick}
            >
              Sign up now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
