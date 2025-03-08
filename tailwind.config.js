module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    {
      options: {
        safelist: {
          standard: [/^bg-/, /^text-/],
        },
      },
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        zenMaru: ["Zen Maru Gothic"],
      },
    },
  },
  plugins: [],
};
