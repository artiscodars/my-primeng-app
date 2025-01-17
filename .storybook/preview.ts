import Material from '@primeng/themes/material';
import { applicationConfig, type Preview } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';

// Set global application configuration
const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        providePrimeNG({
          theme: {
            preset: Material, // Default "Material" theme, must be overriden with Numo colors/styles
            options: {
              darkModeSelector: '.numo-app-dark', // Override the default dark mode selector which is system's preffered color scheme (basicly disable it for now)
            },
          },
        }),
      ],
    }),
  ],

  parameters: {
    options: {
      storySort: {
        //method: "alphabetical",
        order: ['Introduction', 'Configure'],
        //  locales: 'en-US',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F8F9FF' },
        { name: 'dark', value: '#000000' },
        // Add more backgrounds as needed
      ],
    },
  },

  tags: ['autodocs']
};

// Dynamically load the Iconify script
const script = document.createElement('script');
script.src = 'https://code.iconify.design/2/2.0.3/iconify.min.js';
script.async = true;
document.head.appendChild(script);

export default preview;
