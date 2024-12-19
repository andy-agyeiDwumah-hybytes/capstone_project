// React
import { useState } from "react"
import { Helmet } from "react-helmet-async"
// Styles
import styles from "./Contact.module.css"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    return
  }

  return (
    <>
      <Helmet>
        <title>Contact | VocabVault</title>
      </Helmet>
      <section aria-labelledby="contact" className={styles.section}>
        <div className="h2Wrapper">
          <h2 id="contact">Contact Us</h2>
        </div>
        <div className="setPaddingInline">
          <div className={styles.textFormWrapper}>
            <div className={styles.textWrapper}>
              <h3
                className={styles.getInTouchHeading}
                id="get-in-touch-heading"
              >
                Get in touch
              </h3>
              <p className={styles.getInTouchText}>
                Have questions or feedback? We&apos;re here to help! Fill out
                the form, and we&apos;ll get back to you as soon as possible.
                Your input helps us improve and serve you better.
              </p>
            </div>
            <div className={styles.formWrapper}>
              <form
                onSubmit={handleSubmit}
                className={styles.form}
                aria-labelledby="get-in-touch-heading"
              >
                <p>
                  Required fields are followed by&nbsp;
                  <span aria-label="required" className={styles.required}>
                    *
                  </span>
                  .
                </p>
                <div className={styles.labelInputWrapper}>
                  <label htmlFor="name" className={styles.label}>
                    Name:&nbsp;
                    <span aria-label="required" className={styles.required}>
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.labelInputWrapper}>
                  <label htmlFor="email" className={styles.label}>
                    Email:&nbsp;
                    <span aria-label="required" className={styles.required}>
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.labelInputWrapper}>
                  <label htmlFor="message" className={styles.label}>
                    Message:&nbsp;
                    <span aria-label="required" className={styles.required}>
                      *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="user_message"
                    value={message}
                    rows={5}
                    onChange={e => setMessage(e.target.value)}
                    required
                    className={[styles.textarea, styles.input].join(" ")}
                  ></textarea>
                </div>
                <div className={styles.btnContainer}>
                  <button type="submit" className={styles.submitBtn}>
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
