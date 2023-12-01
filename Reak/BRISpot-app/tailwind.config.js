const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'BackgroundColor': '#F2F2F2',
        'MainBlue': '#084F8C',
        'Blue1': '#00529C',
        'BgPrimary': '#012D5A',
        'Black': '#303030',
        'BrandSecondary': '#ED6E12',
        'Green': '#219653',
        'Green1': '#3AB870',
        'Gray4': '#E0E0E0',
        'Gray1': '#4F4F4F',
        'Red': '#E84040',
      },

      fontFamily: {
        nunito: "'Nunito', sans-serif",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});

