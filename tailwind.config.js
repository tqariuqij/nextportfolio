module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontfamily: {
        heading: ["Share Tech Mono"],
        body: ["Poppins"],
      },
      outline: {
        green: "2px solid #64ffda",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
