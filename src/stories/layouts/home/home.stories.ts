import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

import description from './home.description.md';

import { AppComponent } from './home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TasksWidget } from '../../widgets/tasks/tasks.component';
import { InfoCardWidget } from '../../widgets/info-card/info-card.component';

export default {
  title: 'Layouts/Home',
  component: AppComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [HeaderComponent, TasksWidget, InfoCardWidget],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
} as Meta<AppComponent>;

type Story = StoryObj<AppComponent>;

export const Default: Story = {
  args: {},
};
