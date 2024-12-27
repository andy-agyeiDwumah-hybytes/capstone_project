// React
import { useRef, useState } from "react"
import { Helmet } from "react-helmet-async"
// Styles
import styles from "./Contact.module.css"
// Constants
import { MAXLENGTHFORUSERNAME } from "../../constants/Constants"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const formRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    const form = new FormData(formRef.current)
    const userName = form.get("user_name")
    const userEmail = form.get("user_email")
    const userMessage = form.get("user_message")

    console.log(`Name: ${userName}\nEmail: ${userEmail}\nMessage: ${userMessage}`)
    alert("Message was sent successfully! View console for receipt")

    setName("")
    setEmail("")
    setMessage("")
    return
  }

  return (
    <>
      <Helmet>
        <title>Contact | VocabVault</title>
      </Helmet>
      <section aria-labelledby="contact" className="section">
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
                ref={formRef}
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
                    maxLength={MAXLENGTHFORUSERNAME}
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
