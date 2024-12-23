// React
import { Helmet } from "react-helmet-async";
import {useNavigate } from "react-router"
// Styles
import styles from "./Home.module.css"
import { useEffect } from "react";
// jQuery
import $ from "jquery"

export default function Home() {
  const navigate = useNavigate()

  // Update H1 text using jQuery
  useEffect(() => {
    $("#home").text("VocabVault")
  })

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
        className={[styles.hero, "section"].join(" ")}
      >
        <div className={styles.textContentWrapper}>
          <h1 id="home" className={styles.heading}></h1>
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
