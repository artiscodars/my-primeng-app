import Aura from '@primeng/themes/aura';
import { applicationConfig, type Preview } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import { usePreset } from '@primeng/themes';

// Dynamically set the Aura theme globally
usePreset(Aura);

// Set global application configuration
const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        providePrimeNG({
          theme: {
            preset: Aura, // Default "Aura" theme, must be overriden with Numo colors/styles
            options: {
              darkModeSelector: '.numo-app-dark',
            },
          },
        }),
      ],
    }),
    (Story) => {
      // Define CSS variables
      const cssVariables = {
        '--p-badge-info-background': '#c9e6ff',
        '--p-badge-info-color': '#000',

        '--p-badge-primary-background': '#72ceff',
        '--p-badge-primary-color': '#000',

        '--p-badge-success-background': '#b7f1ae',
        '--p-badge-success-color': '#000',

        '--p-badge-warn-background': '#ffe17b',
        '--p-badge-warn-color': '#000',

        '--p-badge-danger-background': '#f2a79d',
        '--p-badge-danger-color': '#000',

        //Accordions

        '--p-accordion-header-active-background': '#c9e6ff',
        '--p-accordion-header-active-hover-background': '#c9e6ff',
        '--p-accordion-content-padding': '1.125rem',

        '--p-button-primary-background': '#72ceff',
        '--p-button-primary-border-color': '#72ceff',
        '--p-button-primary-color': '#000',
        '--p-button-primary-hover-background': '#3fbcff',
        '--p-button-primary-hover-border-color': '#3fbcff',
        '--p-button-primary-hover-color': '#000',
        '--p-button-primary-focus-background': '#3fbcff',
        '--p-button-primary-focus-border-color': '#3fbcff',
        '--p-button-primary-focus-color': '#000',
        '--p-button-primary-active-background': '#3fbcff',
        '--p-button-primary-active-border-color': '#3fbcff',
        '--p-button-primary-active-color': '#000',

        '--p-button-secondary-background': '#c9e6ff',
        '--p-button-secondary-border-color': '#c9e6ff',
        '--p-button-secondary-color': '#000',
        '--p-button-secondary-hover-background': '#afd0ff',
        '--p-button-secondary-hover-border-color': '#afd0ff',
        '--p-button-secondary-hover-color': '#000',

        '--p-button-success-background': '#b7f1ae',
        '--p-button-success-border-color': '#b7f1ae',
        '--p-button-success-color': '#000',
        '--p-button-success-hover-background': '#8ce37d',
        '--p-button-success-hover-border-color': '#8ce37d',
        '--p-button-success-hover-color': '#000',

        '--p-button-danger-background': '#f2a79d',
        '--p-button-danger-border-color': '#f2a79d',
        '--p-button-danger-color': '#000',
        '--p-button-danger-hover-background': '#ff897d',
        '--p-button-danger-hover-border-color': '#ff897d',
        '--p-button-danger-hover-color': '#000',

        '--p-button-link-color': '#62b0ff',
        '--p-button-link-hover-color': '#3a95e7',

        '--p-button-outlined-primary-border-color': '#3a95e7',
        '--p-button-outlined-primary-color': '#3a95e7',
        '--p-button-outlined-primary-hover-background': '#c9e6ff',
        '--p-button-outlined-primary-hover-border-color': '#72ceff',

        '--p-button-outlined-secondary-border-color': '#8292a7',
        '--p-button-outlined-secondary-color': '#8292a7',
        '--p-button-outlined-secondary-hover-background': '#c9e6ff',
        '--p-button-outlined-secondary-hover-border-color': '#8292a7',

        '--p-button-outlined-success-border-color': '#6cbd67',
        '--p-button-outlined-success-color': '#6cbd67',
        '--p-button-outlined-success-hover-background': '#c9ffbf',
        '--p-button-outlined-success-hover-border-color': '#6cbd67',

        '--p-button-outlined-danger-border-color': '#ff5449',
        '--p-button-outlined-danger-color': '#ff5449',
        '--p-button-outlined-danger-hover-background': '#ffe9e7',
        '--p-button-outlined-danger-hover-border-color': '#ff5449',

        '--p-button-text-primary-color': '#3a95e7',
        '--p-button-text-primary-hover-color': '#3a95e7',
        '--p-button-text-primary-hover-background': '#c9e6ff',
        '--p-button-text-primary-active-color': '#3a95e7',

        '--p-checkbox-checked-border-color': '#3a95e7',
        '--p-checkbox-checked-background': '#3a95e7',
        '--p-checkbox-checked-color': '#fff',
        '--p-checkbox-checked-hover-border-color': '#3a95e7',
        '--p-checkbox-checked-hover-background': '#3a95e7',
        '--p-checkbox-checked-hover-color': '#fff',
        '--p-checkbox-checked-focus-border-color': '#3a95e7',
        '--p-checkbox-checked-focus-background': '#3a95e7',
        '--p-checkbox-checked-focus-color': '#fff',

        '--p-checkbox-unchecked-border-color': '#3a95e7',
        '--p-checkbox-unchecked-background': '#fff',
        '--p-checkbox-unchecked-color': '#3a95e7',
        '--p-checkbox-unchecked-hover-border-color': '#3a95e7',
        '--p-checkbox-unchecked-hover-background': '#fff',
        '--p-checkbox-unchecked-hover-color': '#3a95e7',
        '--p-checkbox-unchecked-focus-border-color': '#3a95e7',
        '--p-checkbox-unchecked-focus-background': '#fff',
        '--p-checkbox-unchecked-focus-color': '#3a95e7',

        '--p-radiobutton-checked-border-color': '#3a95e7',
        '--p-radiobutton-checked-background': '#3a95e7',
        '--p-radiobutton-checked-color': '#fff',
        '--p-radiobutton-checked-hover-border-color': '#3a95e7',
        '--p-radiobutton-checked-hover-background': '#3a95e7',
        '--p-radiobutton-checked-hover-color': '#fff',
        '--p-radiobutton-checked-focus-border-color': '#3a95e7',
        '--p-radiobutton-checked-focus-background': '#3a95e7',
        '--p-radiobutton-checked-focus-color': '#fff',

        '--p-radiobutton-unchecked-border-color': '#3a95e7',
        '--p-radiobutton-unchecked-background': '#fff',
        '--p-radiobutton-unchecked-color': '#3a95e7',
        '--p-radiobutton-unchecked-hover-border-color': '#3a95e7',
        '--p-radiobutton-unchecked-hover-background': '#fff',
        '--p-radiobutton-unchecked-hover-color': '#3a95e7',
        '--p-radiobutton-unchecked-focus-border-color': '#3a95e7',
        '--p-radiobutton-unchecked-focus-background': '#fff',
        '--p-radiobutton-unchecked-focus-color': '#3a95e7',

        '--p-inputtext-focus-border-color': '#3a95e7',
        '--p-select-focus-border-color': '#3a95e7',

        '--p-dialog-footer-flex-direction': 'row-reverse',

        '--p-tabs-active-bar-background': '#72ceff',
        '--p-tabs-active-bar-height': '2px',
        '--p-tabs-tab-active-color': '#000',

        '--p-scrollpanel-bar-background': '#c9e6ff',
      };

      // Apply CSS Variables Dynamically
      Object.entries(cssVariables).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });

      return Story();
    },
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

  tags: ['autodocs'],
};

// Dynamically load the Iconify script
const script = document.createElement('script');
script.src = 'https://code.iconify.design/2/2.0.3/iconify.min.js';
script.async = true;
document.head.appendChild(script);

const userwayScript = document.createElement('script');
userwayScript.src = 'https://cdn.userway.org/widget.js';
userwayScript.setAttribute('data-account', '6KG7qdg8VL');
userwayScript.setAttribute('data-position', '5');
userwayScript.setAttribute('data-lang', 'en');
userwayScript.setAttribute('data-size', 'small');
userwayScript.setAttribute('data-mobile', 'false');
userwayScript.setAttribute('data-color', '#c9e6ff');
userwayScript.async = true;
document.head.appendChild(userwayScript);

export default preview;
