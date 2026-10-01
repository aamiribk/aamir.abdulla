/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F6F8", ink: "#12202F", rule: "#CBD3DB", accent: "#1F5FBF",
        night: "#0E1621", mist: "#E6EDF3", line: "#27364A", glow: "#7CB0FF",
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        figures: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
