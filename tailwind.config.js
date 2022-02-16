module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/template/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        bgColorRed: '#ff5555',
        bgColorOrange: '#ffb86c',
        displayColor: '#282a36',
        transparentWhite: 'rgba(255, 255, 255, 0.6)',
        lightGrey: '#eee',
        mediumGrey: '#ccc',
        lightOrange: '#fea170',
        mediumOrange: '#f78d6c',
      },
      height: {
        calHeight: '45rem',
      },
      width: {
        calWidth: '30rem',
      },
    },
  },
  screen: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xl2: '1536px',
  },
  fontSize: {},
  plugins: [],
};
