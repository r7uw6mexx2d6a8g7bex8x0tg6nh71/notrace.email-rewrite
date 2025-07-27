/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#9b1c31",  // Darker primary red (was #e11d48)
          dark: "#6e141f",     // Darker red for hover (was #b91c1c)
          light: "#c2394f",    // Darker light accent red (was #f43f5e)
        },
        surface: {
          DEFAULT: "#0e0e0e",  // Main background (deep black)
          soft: "#1c1c1e",     // Slightly lighter surface
          elevated: "#2a2a2d", // Card-like surfaces
        },
        text: {
          DEFAULT: "#f4f4f5",  // Main light text
          muted: "#a1a1aa",    // Muted gray text
          subtle: "#71717a",   // For captions, borders
        },
        border: {
          DEFAULT: "#2e2e2e",  // General border color
          focus: "#9b1c31",   // Updated to match brand.DEFAULT
        },
        accent: {
          green: "#10b981",    // Success color
          yellow: "#facc15",   // Warning color
        }
      },
    },
  },
  plugins: [],
};
