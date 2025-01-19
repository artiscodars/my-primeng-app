const { createThemes } = require('tailwindcss-primeui');

module.exports = {
  content: [
    './src/**/*.{html,ts}', // Angular HTML and TypeScript files
    './node_modules/primeng/**/*.{js,html}', // PrimeNG components
    './.storybook/**/*.{js,ts}', // Storybook configuration files
    './stories/**/*.{html,ts}', // Storybook stories
  ],
  theme: {
    extend: {}, // Extend Tailwind's default theme here
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
