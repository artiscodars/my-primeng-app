// tasks.stories.ts

import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ListWidget } from './list.component';
import { Tasks } from './list.model';

const meta: Meta = {
  title: 'Widgets/List',
  decorators: [
    moduleMetadata({
      imports: [ListWidget],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  args: {
    tasks: [...Tasks],
    title: 'Tasks',
  },
  render: (args) => {
    return {
      props: {
        ...args,
      },
      template: `<numo-list-widget [title]="title"></numo-list-widget>`,
    };
  },
};
