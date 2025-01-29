import { Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import description from './header.description.md';

const meta: Meta<HeaderComponent> = {
  title: 'Design blocks/Header',
  component: HeaderComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],

  render: () => ({
    props: {},
    template: `<numo-header></numo-header>`,
  }),
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {},
};
