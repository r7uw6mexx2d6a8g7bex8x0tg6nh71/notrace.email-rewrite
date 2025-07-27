import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  // Create an array with 10 items for logos
  const logos = Array.from({ length: 10 });

  return (
    <section className={styles.hero} aria-label="Hero section">
      <div className={styles.accentShape} aria-hidden="true" />

      <div className={styles.floatingLogoWrapper} aria-hidden="true">
        {logos.map((_, i) => (
          <div
            key={i}
            className={styles.floatingLogo}
            style={{
              "--i": i,
            }}
          >
            <img src="/assets/5w46cf.png" alt="" />
          </div>
        ))}
      </div>

      <div className={styles.content}>
        <h1 className={styles.headingMain}>
          Own Your <span className={styles.headingHighlight}>Inbox</span> with{" "}
          <span className={styles.headingHighlight}>notrace.email</span>
        </h1>

        <p className={styles.description}>
          Fast. Secure. Private. No ads. No tracking.
        </p>
      </div>
    </section>
  );
}
