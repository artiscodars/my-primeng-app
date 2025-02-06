// tasks.stories.ts

import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ShortcutWidget } from './shortcut.component';

const meta: Meta = {
  title: 'Widgets/Shortcut',
  decorators: [
    moduleMetadata({
      imports: [ShortcutWidget],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ShortcutWidget>;

export const Basic: Story = {
  args: {
    title: 'Shortcut',
    icon: 'pi pi-info-circle',
    link: 'https://visma.com',
    target: '_self',
  },
  render: (args) => {
    return {
      props: {
        ...args,
      },
      template: `<numo-shortcut-widget [title]="title" [icon]="icon" [link]="link" [target]="target"></numo-shortcut-widget>`,
    };
  },
};
