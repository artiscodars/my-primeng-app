import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
// import { Menu } from "./menu.model";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import description from './menu.description.md';
import { MenuModule } from 'primeng/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

const meta: Meta = {
  title: 'Components/Menu',
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        FormsModule /* RouterTestingModule.withRoutes([]) */,
        MenuModule,
        BrowserAnimationsModule,
        ButtonModule,
        BadgeModule,
        RippleModule,
        AvatarModule,
        ToastModule,
      ],
      providers: [MessageService],
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
    items: [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Search', icon: 'pi pi-search' },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-menu [model]="items" />`,
  }),
};
export const Group: Story = {
  args: {
    items: [
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
          },
        ],
      },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-menu [model]="items" />`,
  }),
};
export const Router: Story = {
  args: {
    items: [
      {
        label: 'Navigate',
        items: [
          {
            label: 'Router Link',
            icon: 'pi pi-palette',
            route: '/',
          },
          {
            label: 'External',
            icon: 'pi pi-home',
            url: 'https://angular.io//',
          },
        ],
      },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-menu [model]="items">
    <ng-template pTemplate="item" let-item>
        <ng-container *ngIf="item.route; else elseBlock">
            <a [routerLink]="item.route" class="p-menuitem-link">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </ng-container>
        <ng-template #elseBlock>
            <a [href]="item.url" class="p-menuitem-link">
                <span [class]="item.icon"></span>
                <span class="ml-2">{{ item.label }}</span>
            </a>
        </ng-template>
    </ng-template>
</p-menu>`,
  }),
};

export const Popup: Story = {
  args: {
    items: [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Export',
            icon: 'pi pi-upload',
          },
        ],
      },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-toast />
<p-menu #menu [model]="items" [popup]="true" />
<p-button (onClick)="menu.toggle($event)" icon="pi pi-ellipsis-v"/>`,
  }),
};
export const Template: Story = {
  args: {
    items: [
      {
        separator: true,
      },
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            shortcut: '⌘+N',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            shortcut: '⌘+S',
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2',
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q',
          },
        ],
      },
      {
        separator: true,
      },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-menu [model]="items" class="flex justify-center" styleClass="w-full md:w-60">
    <ng-template #start>
        <span class="inline-flex items-center gap-1 px-3 py-2">

            <span class="text-xl font-semibold">
                PRIME<span class="text-primary">APP</span>
            </span>
        </span>
    </ng-template>
    <ng-template #submenuheader let-item>
        <span class="text-primary font-bold">{{ item.label }}</span>
    </ng-template>
    <ng-template #item let-item>
        <a pRipple class="flex items-center p-menu-item-link">
            <span [class]="item.icon"></span>
            <span class="ml-2">{{ item.label }}</span>
            <p-badge *ngIf="item.badge" class="ml-auto" [value]="item.badge" />
            <span *ngIf="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">
                {{ item.shortcut }}
            </span>
        </a>
    </ng-template>
    <ng-template #end>
        <button pRipple class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="mr-2" shape="circle" />
            <span class="inline-flex flex-col">
                <span class="font-bold">Amy Elsner</span>
                <span class="text-sm">Admin</span>
            </span>
        </button>
    </ng-template>
</p-menu>`,
  }),
};
