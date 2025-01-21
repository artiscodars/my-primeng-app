import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import description from './left-menu.description.md';
import { LeftMenuComponent } from './left-menu.component';
import { Menu } from '../left-menu/menu.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const meta: Meta = {
  title: 'Components/LeftMenu',
  decorators: [
    moduleMetadata({
      imports: [LeftMenuComponent, BrowserAnimationsModule],
    }),
  ],
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  args: {
    items: [...Menu],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<numo-left-menu [items]="items" ></numo-left-menu>`,
  }),
};
