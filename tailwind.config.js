try {
  const { createThemes } = require('tailwindcss-primeui');
  console.log('createThemes loaded:', createThemes);

  module.exports = {
    content: ['./src/**/*.{html,ts}', './node_modules/primeng/**/*.{js,html}'],
    theme: {
      extend: {},
      ...(createThemes
        ? createThemes({
          prime: {
            primary: '#0052cc',
            secondary: '#ff4081',
          },
        })
        : {}),
    },
    plugins: [],
  };
} catch (error) {
  console.error('Error in TailwindCSS configuration:', error);
}
