module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#ff6510',
          secondary: '#405481',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },

        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#ff6510',
          secondary: '#5570ab',
          'base-300': '#ccc',
        },
      },
      'dark',
    ],
  },
}
