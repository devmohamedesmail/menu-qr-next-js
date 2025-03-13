/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",  // Next.js App Router
      "./pages/**/*.{js,ts,jsx,tsx}", // Next.js Pages Router (if used)
      "./components/**/*.{js,ts,jsx,tsx}", // Custom components
    ],
    theme: {
      extend: {
        fontFamily: {
          cairo: ["Cairo", "sans-serif"], // Custom font
        },
      },
    },
    plugins: [],
  };
  