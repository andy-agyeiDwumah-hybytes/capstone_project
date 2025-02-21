// React
import { useNavigate } from "react-router"
import { useContext, useEffect } from "react";
// Styles
import styles from "./Home.module.css"
// Context
import { UserContext } from "../../context/UserContext"
// jQuery
import $ from "jquery"

export default function Home() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  // Update H1 text using jQuery
  useEffect(() => {
    $("#home").text("VocabVault")
  })

  const handleClick = () => {
    navigate("login")
  }

  return (
    <>
      <>
        <title>Home | VocabVault</title>
      </>
      <section
        aria-labelledby="home"
        className={[styles.hero, "section"].join(" ")}
      >
        <div className={styles.textContentWrapper}>
          <h1 id="home" className={styles.heading}></h1>
          {user ? (
            <div className={styles.paraWrapperLoggedIn}>
              <p className={styles.para}>
                Hi <span className={styles.name}>{user.name}</span>, Keep
                growing your vocabulary and reach new milestones.
              </p>
            </div>
          ) : (
            <>
              <p className={[styles.para, styles.paraNotLoggedIn].join(" ")}>
                Join 1,200+ users improving their vocabulary today!
              </p>
              <div>
                <button
                  type="button"
                  className={styles.heroBtn}
                  onClick={handleClick}
                >
                  Sign up now
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
