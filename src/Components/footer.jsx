import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <p className={styles.copy}>&copy; {year} notrace.email All rights reserved.</p>

      <nav aria-label="Footer navigation">
        <ul className={styles.navList}>
          {[
            { href: "/privacy", label: "Privacy Policy", external: false },
            { href: "/terms", label: "Terms of Service", external: false },
            { href: "https://discord.gg/notrace", label: "Discord", external: true },
          ].map(({ href, label, external }) => (
            <li key={href}>
              <a
                href={href}
                className={styles.navLink}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
