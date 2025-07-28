import styles from "@/styles/HeroSection.module.css";

/**
 * HeroSection component with floating logos and main marketing message.
 */
export default function HeroSection() {
  // Array for rendering floating logos (14 total)
  const logosCount = 14;
  const logos = Array.from({ length: logosCount });

  return (
    <section className={styles.hero} aria-label="Hero section">
      {/* Decorative accent shape (non-interactive) */}
      <div className={styles.accentShape} aria-hidden="true" />

      {/* Floating logos background, purely decorative */}
      <div className={styles.floatingLogoWrapper} aria-hidden="true">
        {logos.map((_, index) => (
          <div
            key={index}
            className={styles.floatingLogo}
            style={{ "--i": index }}
          >
            <img src="/assets/5w46cf.png" alt="" />
          </div>
        ))}
      </div>

      {/* Main content: headline and description */}
      <div className={styles.content}>
        <h1 className={styles.headingMain}>
          Own Your{" "}
          <span className={styles.headingHighlight}>Inbox</span> with{" "}
          <span className={styles.headingHighlight}>notrace.email</span>
        </h1>

        <p className={styles.description}>
          Fast. Secure. Private. No ads. No tracking.
        </p>
      </div>
    </section>
  );
}
