// React
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";
// Context
import { UserContext } from "../../context/UserContext";
// Styles
import styles from "./AuthForm.module.css";

export default function AuthForm() {
  // Set default form to 'log in' form
  const [logIn, setLogIn] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, handleSignUp } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Represents the default action of a user logging in or signing up
    // Method returns 'true' if action was successful
    let success = false;
    if (logIn) {
      success = handleLogin(name, password);
    } else {
      success = handleSignUp(name, email, password);
    }
  
    if (success) {
      navigate("/")
    } else {
      return
    }

  };

  const handleClick = () => {
    // Change to sign up form vice versa
    setLogIn(!logIn);
    // Reset fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Helmet>
        <title>{ logIn ? "Log in" : "Sign up" } | VocabVault</title>
      </Helmet>
      <section className={["section", styles.section].join(" ")}>
        <form onSubmit={handleSubmit} className={styles.authForm}>
          <h1 className={styles.formHeading}>{logIn ? "Log in" : "Sign up"}</h1>
          <div>
            <label htmlFor="username" className={styles.authFormLabel}>
              Name:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={name}
              maxLength={5}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
          {!logIn && (
            <div>
              <label htmlFor="email" className={styles.authFormLabel}>
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="password" className={styles.authFormLabel}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
          <div className={styles.btnContainer}>
            <button type="submit">{logIn ? "Log in" : "Sign up"}</button>
            <button type="button" onClick={handleClick}>
              Switch to {logIn ? "Sign up" : "Log in"}?
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
