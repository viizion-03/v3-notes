/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#61777F",
        grey: "#89939E",
        orange: "#Fe7833",
        red: "#E1410D",
        bgGrey: "#89939E",
        bgDarkgreen: "#243837",
        bgBlack: "#212121",
      },
      backgroundImage: {
        'hero': "url(./src/lib/assets/void.jpg)",
        'v3': "url(./src/lib/logos/v3-grey-light.svg)"
      },
      backgroundSize: {
        '15%' : '15%',
        '30%' : '30%'
      }
    },
  },
  plugins: [require("daisyui")],
};
