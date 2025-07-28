"use client";

import { useState, useEffect, useMemo } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import faqData from "@/utils/faq";
import styles from "@/styles/faq.module.css";

/**
 * Helper to combine class names conditionally.
 * Filters out falsy values and joins with spaces.
 */
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * FAQ Section component: searchable list of questions with toggleable answers.
 */
export default function FaqSection() {
  // Currently opened FAQ item ID (null = none open)
  const [openId, setOpenId] = useState(null);

  // Search input value
  const [search, setSearch] = useState("");

  // Number of FAQ items currently visible (for staggered reveal animation)
  const [visibleCount, setVisibleCount] = useState(0);

  /**
   * Effect to stagger reveal FAQ items on mount.
   * Increases visibleCount by 1 every 100ms until all items are visible.
   */
  useEffect(() => {
    if (visibleCount >= faqData.length) return;

    const timer = setTimeout(() => {
      setVisibleCount((count) => count + 1);
    }, 100);

    return () => clearTimeout(timer);
  }, [visibleCount]);

  /**
   * Memoized filtered FAQs based on search term.
   * Filtering by question text (case-insensitive).
   */
  const filteredFaqs = useMemo(() => {
    const term = search.trim().toLowerCase();

    if (!term) return faqData;

    return faqData.filter(({ question }) =>
      question.toLowerCase().includes(term)
    );
  }, [search]);

  /**
   * Toggles the open/close state of a FAQ item by its ID.
   * Closes if already open.
   */
  const toggleOpen = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  /**
   * Keyboard event handler for toggling FAQ items on Enter or Space key.
   */
  const handleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleOpen(id);
    }
  };

  return (
    <section className={styles.wrapper} aria-label="Frequently Asked Questions">
      {/* Section Title */}
      <h1 className={styles.title}>Frequently Asked Questions</h1>

      {/* Search Box */}
      <div className={styles.searchBox}>
        <FiSearch className={styles.searchIcon} aria-hidden="true" />
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search questions"
          autoComplete="off"
          spellCheck={false}
        />
      </div>

      {/* FAQ Items Grid */}
      <div className={styles.faqGrid}>
        {filteredFaqs.map(({ id, question, answer, icon: Icon }, index) => {
          const isOpen = openId === id;
          const isVisible = index < visibleCount;

          return (
            <article
              key={id}
              tabIndex={0}
              role="button"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${id}`}
              aria-labelledby={`faq-question-${id}`}
              className={classNames(
                styles.card,
                isOpen && styles.open,
                isVisible ? styles.visible : styles.hidden
              )}
              onClick={() => toggleOpen(id)}
              onKeyDown={(e) => handleKeyDown(e, id)}
            >
              {/* FAQ Question Header */}
              <header className={styles.cardHeader}>
                <span className={styles.iconWrapper}>
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h2 id={`faq-question-${id}`} className={styles.question}>
                  {question}
                </h2>
                <FiChevronDown className={styles.chevron} aria-hidden="true" />
              </header>

              {/* FAQ Answer - visible only if open */}
              {isOpen && (
                <section
                  id={`faq-answer-${id}`}
                  className={styles.answer}
                  role="region"
                  aria-live="polite"
                >
                  {answer}
                </section>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
