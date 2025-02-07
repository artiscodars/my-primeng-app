// tasks.stories.ts

import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TableWidget } from './table.component';
import { Tasks } from './table.model';

const meta: Meta = {
  title: 'Widgets/Table',
  decorators: [
    moduleMetadata({
      imports: [TableWidget],
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
      template: `<numo-table-widget [title]="title"></numo-table-widget>`,
    };
  },
};
