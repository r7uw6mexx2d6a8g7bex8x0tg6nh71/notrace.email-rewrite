import {
  FiLock,
  FiCreditCard,
  FiShield,
  FiSmartphone,
  FiHeadphones,
  FiMail,
  FiGlobe,
  FiUpload,
  FiFilter,
  FiCode,
} from "react-icons/fi";

const faqData = [
  {
    id: 1,
    question: "Do you log passwords or email content?",
    answer:
      "No, we do not log passwords, email content, or any metadata. Your privacy is our top priority and we maintain a strict zero-logs policy!",
    icon: FiLock,
  },
  {
    id: 2,
    question: "Is notrace free to use?",
    answer:
      "Notrace.email is a premium service that costs only $5. This nominal fee helps us maintain our high-quality infrastructure and zero-logs commitment.",
    icon: FiCreditCard,
  },
  {
    id: 3,
    question: "Do you share data with authorities?",
    answer:
      "We don't log anything, so we can't share anything. Our zero-data policy means there's literally nothing to share.",
    icon: FiShield,
  },
  {
    id: 4,
    question: "How do I reset my password?",
    answer:
      "We're implementing password reset functionality soon, along with many other exciting features to enhance your experience.",
    icon: FiSmartphone,
  },
  {
    id: 5,
    question: "How do I get support?",
    answer: (
      <>
        Join our support community on{" "}
        <a
          href="https://discord.gg/notrace"
          target="_blank"
          rel="noopener noreferrer"
          className="faq-link"
        >
          Discord
        </a>{" "}
        or contact us directly via Telegram at{" "}
        <a
          href="https://t.me/notracebandit"
          target="_blank"
          rel="noopener noreferrer"
          className="faq-link"
        >
          t.me/notracebandit
        </a>{" "}
        for immediate assistance.
      </>
    ),
    icon: FiHeadphones,
  },
  {
    id: 6,
    question: "What is notracmail?",
    answer: "A privacy-first email platform — no ads, no tracking. Full control, your domain.",
    icon: FiMail,
  },
  {
    id: 7,
    question: "Can I use my own domain?",
    answer: "Absolutely. Bring your domain and create unlimited custom addresses.",
    icon: FiGlobe,
  },
  {
    id: 8,
    question: "Can I migrate from Gmail or others?",
    answer: "Yes — simple import tools make switching smooth and fast.",
    icon: FiUpload,
  },
  {
    id: 9,
    question: "Do you offer spam filtering?",
    answer: "Yes — fully customizable filters and smart inbox rules.",
    icon: FiFilter,
  },
  {
    id: 10,
    question: "Is notracmail open source?",
    answer: "Parts of it are. We're committed to transparency and open standards.",
    icon: FiCode,
  },
];

export default faqData;
