// tasks.stories.ts

import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TasksWidget } from './tasks.component';
import { Tasks } from './tasks.model';

const meta: Meta = {
  title: 'Widgets/Tasks',
  decorators: [
    moduleMetadata({
      imports: [TasksWidget],
    }),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  args: {
    tasks: [...Tasks],
  },
  render: (args) => {
    return {
      props: {
        ...args,
      },
      template: `<numo-tasks-widget></numo-tasks-widget>`,
    };
  },
};
