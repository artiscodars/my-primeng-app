// alert.stories.ts

import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { NumoAlert } from './alert.component';

const meta: Meta = {
  title: 'Components/Alert',
  component: NumoAlert,
  decorators: [
    moduleMetadata({
      imports: [NumoAlert],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select', // Use 'select' for a dropdown
      options: ['info', 'success', 'warning', 'error'], // Define the options
    },
  },
};

export default meta;
type Story = StoryObj<NumoAlert>;

export const Basic: Story = {
  args: {
    title: 'This is an alert',
    icon: 'pi pi-info-circle',
    text: '<b>Missing Context/Providers:</b> You can use decorators to supply specific contexts or providers, which are sometimes necessary for components to render correctly. For detailed instructions on using decorators, please visit the Decorators documentation.',
    showCloseButton: true,
    severity: 'info',
  },
  render: (args) => {
    return {
      props: {
        ...args,
      },
      template: `<numo-alert [title]="title" [icon]="icon" [text]="text" [showCloseButton]="showCloseButton" [severity]="severity"></numo-alert>`,
    };
  },
};
