import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import description from './confirm-dialog.description.md';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const meta: Meta = {
  title: 'Components/Confirmation Dialog',
  decorators: [
    moduleMetadata({
      imports: [ConfirmDialogComponent, BrowserAnimationsModule],
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
  args: {},
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<numo-confirm-dialog></numo-confirm-dialog>`,
  }),
};
