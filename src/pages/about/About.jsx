// React
import { Helmet } from "react-helmet-async";
// Styles
import styles from "./About.module.css";

export default function About() {
    return (
      <>
        <Helmet>
          <title>About | VocabVault</title>
        </Helmet>
        <section
          aria-labelledby="about"
          className={[styles.section, "section"].join(" ")}
        >
          <div className={[styles.abouth2Wrapper, "h2Wrapper"].join(" ")}>
            <h2 id="about">About</h2>
          </div>
          {/* Div below wraps content */}
          <div className="setPaddingInline">
            <div className={styles.paraAndImgWrapper}>
              <div className={styles.aboutImgWrapper}></div>
              <div className={styles.aboutTextWrapper}>
                <p className={styles.aboutText}>
                  Welcome to VocabVault, your ultimate companion for expanding
                  your vocabulary and mastering the art of words. Our mission is
                  to make learning new words engaging and effortless by
                  providing detailed word insights, interactive tools, and
                  personalised features. Whether you&apos;re a student,
                  professional, or language enthusiast, our platform empowers
                  you to enhance your communication skills and enrich your
                  language journey. Explore, save, and quiz yourself—one word at
                  a time!
                </p>
              </div>
            </div>
            <div
              className={styles.h3ParaWrapper}
              data-content="platform database"
            >
              <h3 className={styles.secondaryHeadings}>Platform Database</h3>
              <p>
                Our platform currently has access to over 250,000 words through
                WordsAPI, providing extensive vocabulary resources.
              </p>
            </div>
            <hr className={styles.horizontalLine} />
            <div className={styles.h3ParaWrapper} data-content="user searches">
              <h3 className={styles.secondaryHeadings}>User Searches</h3>
              <p>
                Collectively, users have searched for over 12,500 words since
                the platform launched.
              </p>
            </div>
          </div>
        </section>
      </>
    );
}
