import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import description from './description.md';
import { NumoTreeBasic } from './basic/basic.component';
import { NumoTreeCheckbox } from './checkbox/checkbox.component';
import { commonFiles } from './data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta = {
  title: 'Components/Tree',
  decorators: [
    moduleMetadata({
      imports: [NumoTreeBasic, NumoTreeCheckbox, BrowserAnimationsModule],
    }),
  ],
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
    items: [...commonFiles],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<numo-tree-basic [items]="items" ></numo-tree-basic>`,
  }),
};

export const Checkbox: Story = {
  args: {
    items: [...commonFiles],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<numo-tree-checkbox [items]="items" ></numo-tree-checkbox>`,
  }),
};
