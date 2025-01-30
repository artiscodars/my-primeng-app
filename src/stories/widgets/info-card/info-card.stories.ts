// tasks.stories.ts

import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { InfoCardWidget } from './info-card.component';

const meta: Meta = {
  title: 'Widgets/Info Card',
  decorators: [
    moduleMetadata({
      imports: [InfoCardWidget],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<InfoCardWidget>;

export const Basic: Story = {
  args: {
    title: 'Info Card',
    icon: 'pi pi-info-circle',
    value: '100',
  },
  render: (args) => {
    return {
      props: {
        ...args,
      },
      template: `<numo-info-card-widget [title]="title" [icon]="icon" [value]="value"></numo-info-card-widget>`,
    };
  },
};
