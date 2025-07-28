import { useState, useEffect } from "react";
import { FiUser, FiKey, FiMail, FiUnlock, FiCheckCircle } from "react-icons/fi";
import styles from "@/styles/AuthPage.module.css";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleForm = () => setIsSignUp((prev) => !prev);

  return (
    <main
      className={`${styles.page} ${mounted ? styles.visible : ""}`}
      aria-live="polite"
    >
      <section className={styles.container} role="main" aria-label="Authentication form">
        <h1 className={styles.title}>{isSignUp ? "Create Account" : "Sign In"}</h1>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()} noValidate>
          {isSignUp ? (
            <>
              <InputWithIcon
                icon={<FiUnlock />}
                type="text"
                name="inviteCode"
                placeholder="Invite Code"
                required
                minLength={6}
                maxLength={20}
                ariaLabel="Invite Code"
              />
              <InputWithIcon
                icon={<FiUser />}
                type="text"
                name="username"
                placeholder="Username"
                required
                minLength={3}
                maxLength={20}
                ariaLabel="Username"
                autoComplete="username"
              />
              <InputWithIcon
                icon={<FiKey />}
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength={6}
                ariaLabel="Password"
                autoComplete="new-password"
              />
              <InputWithIcon
                icon={<FiCheckCircle />}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                minLength={6}
                ariaLabel="Confirm Password"
              />
            </>
          ) : (
            <>
              <InputWithIcon
                icon={<FiMail />}
                type="email"
                name="email"
                placeholder="Email"
                required
                ariaLabel="Email address"
                autoComplete="email"
              />
              <InputWithIcon
                icon={<FiKey />}
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength={6}
                ariaLabel="Password"
                autoComplete="current-password"
              />
            </>
          )}

          <button type="submit" className={styles.button}>
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className={styles.toggleText}>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={toggleForm}
            className={styles.toggleButton}
            aria-label="Toggle sign in/sign up"
            type="button"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </section>
    </main>
  );
}

function InputWithIcon({ icon, type, name, placeholder, required, minLength, maxLength, ariaLabel, autoComplete }) {
  return (
    <label className={styles.inputWrapper}>
      <span className={styles.icon}>{icon}</span>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        aria-label={ariaLabel}
        autoComplete={autoComplete}
        spellCheck="false"
      />
      <span className={styles.underline}></span>
    </label>
  );
}
