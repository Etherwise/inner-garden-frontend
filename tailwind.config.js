/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'wellgoirthm-card-custom-position': 'top, bottom',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "purple-bg-light": "#C4CAF0",
        "purple-bg-extra-light": "#DBB7FC",
        "purple-bg-dark": "#3F225B",
        
        "purple-outer-octagon": "#AA9DD0",
        "purple-inner-octagon": "#8757B5",

        "purple-text": "#9368BC",
        "purple-text-light": "#8858B5",
        "purple-mid": "#AF5CAA",
        "purple-bright": "#BB4BAD",
        "purple-dark": "#5E3D84",
        "purple-soft-light": "#ECEAF5",

        "orange-mid": "#F9A819",
        "orange-dark": "#FAA81A",

        "pink-arrow": "#FF008A",

        "yellow-dark": "#FFF500",
        "yellow-light": "#FFF200",
      },
      dropShadow : {
       'purple': [
            '0 6px 6px rgba(127, 17, 224, 0.4)'
        ],
        'white': [
            '3px 3px 0 rgba(255, 255, 255, 1)'
        ]
      }
    },
  },
  plugins: [],
};
