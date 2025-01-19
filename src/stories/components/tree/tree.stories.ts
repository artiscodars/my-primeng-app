import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata, applicationConfig } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import description from './description.md';
import { TreeComponent } from './tree.component';
import { commonFiles } from './data';

const deepClone = (data: any) => JSON.parse(JSON.stringify(data));

/** Recursive function to expand or collapse tree nodes */
const expandRecursive = (node: TreeNode, isExpand: boolean): void => {
  node.expanded = isExpand;
  node.children?.forEach((childNode) => expandRecursive(childNode, isExpand));
};

const meta: Meta = {
  title: 'Components/Tree',
  component: TreeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        TreeModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        InputSwitchModule,
        TreeComponent, // Standalone component import
      ],
      providers: [TreeDragDropService],
    }),
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: { component: description },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Basic: Story = {
  args: {
    files: deepClone(commonFiles), // Clone data to avoid mutation
  },
  render: (args) => ({
    props: args,
    template: `<p-tree class="w-full md:w-30rem" [value]="files"></p-tree>`,
  }),
};

export const Checkbox: Story = {
  args: {
    files: deepClone(commonFiles), // Clone data to avoid mutation
    selectedFiles: null,
  },
  render: (args) => ({
    props: args,
    template: `
      <p-tree
        [value]="files"
        selectionMode="checkbox"
        class="w-full md:w-30rem"
        [(selection)]="selectedFiles"
      ></p-tree>
    `,
  }),
};

export const DragAndDrop: Story = {
  args: {
    files: deepClone(commonFiles), // Clone data to avoid mutation
  },
  render: (args) => ({
    props: args,
    template: `
      <p-tree
        class="w-full md:w-30rem"
        [value]="files"
        [draggableNodes]="true"
        [droppableNodes]="true"
        draggableScope="self"
        droppableScope="self"
      ></p-tree>
    `,
  }),
};
