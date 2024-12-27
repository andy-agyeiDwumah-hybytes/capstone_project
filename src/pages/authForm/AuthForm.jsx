// React
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
// Context
import { UserContext } from "../../context/UserContext"
// Styles
import styles from "./AuthForm.module.css"
// Constants
import { MAXLENGTHFORUSERNAME } from "../../constants/Constants"

export default function AuthForm() {
  // Set default form to 'log in' form
  const [logIn, setLogIn] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { handleLogin, handleSignUp } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // Represents the default action of a user logging in or signing up
    // Method returns 'true' if action was successful
    let success = false
    if (logIn) {
      success = handleLogin(name, password)
    } else {
      success = handleSignUp(name, email, password)
    }

    if (success) {
      navigate("/")
      alert("Logged in succesfully!")
    } else {
      return
    }
  }

  const handleClick = () => {
    // Change to sign up form vice versa
    setLogIn(!logIn)
    // Reset fields
    setName("")
    setEmail("")
    setPassword("")
  }

  return (
    <>
      <>
        <title>Log in | VocabVault</title>
      </>
      <section className="section" aria-labelledby="auth-form-heading">
        <form
          onSubmit={handleSubmit}
          className={styles.authForm}
          aria-label="Authentication"
        >
          <h1 className={styles.formHeading} id="auth-form-heading">
            {logIn ? "Log in" : "Sign up"}
          </h1>
          <p>
            Required fields are followed by <span aria-label="required">*</span>
            .
          </p>

          <div className={styles.labelInputWrapper}>
            <label htmlFor="username" className={styles.authFormLabel}>
              Name: <span aria-label="required">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={name}
              maxLength={MAXLENGTHFORUSERNAME}
              onChange={e => setName(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
          {/* Show email section for users who want to sign in only */}
          {!logIn && (
            <div className={styles.labelInputWrapper}>
              <label htmlFor="email" className={styles.authFormLabel}>
                Email: <span aria-label="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
          )}
          <div className={styles.labelInputWrapper}>
            <label htmlFor="password" className={styles.authFormLabel}>
              Password: <span aria-label="required">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
          <div className={styles.btnContainer}>
            <button type="submit" className={styles.submitBtn}>
              {logIn ? "Log in" : "Sign up"}
            </button>
            <button type="button" onClick={handleClick}>
              Switch to {logIn ? "Sign up" : "Log in"}?
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
