import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SelectModule } from 'primeng/select'; // Updated module for v19
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import description from './select.description.md'; // Updated markdown description
import { ButtonModule } from 'primeng/button';

const meta: Meta = {
  title: 'Components/Form/Select',
  decorators: [
    moduleMetadata({
      imports: [
        SelectModule, // Use SelectModule instead of DropdownModule
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
      ],
    }),
  ],
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
    label: 'Select a City',
    cities: [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-select
      [options]="cities"
      optionLabel="name"
      placeholder="{{label}}"
      styleClass="w-20rem"
    ></p-select>`,
  }),
};

export const ReactiveForms: Story = {
  args: {
    label: 'Select a City',
    cities: [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-select
      [options]="cities"
      optionLabel="name"
      placeholder="{{label}}"
      styleClass="w-20rem"
    ></p-select>`,
  }),
};

export const Editable: Story = {
  args: {
    label: 'Select a City',
    cities: [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ],
    editable: true,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-select
      [options]="cities"
      optionLabel="name"
      placeholder="{{label}}"
      [editable]="editable"
      styleClass="w-20rem"
    ></p-select>`,
  }),
};

export const Group: Story = {
  args: {
    label: 'Select a City',
    groupedCities: [
      {
        label: 'Germany',
        value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' },
        ],
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' },
        ],
      },
      {
        label: 'Japan',
        value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' },
        ],
      },
    ],
    group: true,
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-select
      [options]="groupedCities"
      optionLabel="label"
      optionGroupLabel="label"
      optionGroupChildren="items"
      placeholder="{{label}}"
      [group]="group"
      styleClass="w-20rem"
    ></p-select>`,
  }),
};

export const CustomFilter: Story = {
  args: {
    label: 'Select a Country',
    countries: [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ],
    filterValue: '',
  },
  render: (args) => ({
    props: {
      ...args,
      customFilterFunction(event: KeyboardEvent, options: any) {
        options.filter(event);
      },
    },
    template: `<p-select
      [options]="countries"
      optionLabel="name"
      [filter]="true"
      filterBy="name"
      placeholder="{{label}}"
      styleClass="w-20rem"
    >
      <ng-template pTemplate="filter" let-options="options">
        <div class="flex gap-1">
          <div class="p-inputgroup" (click)="$event.stopPropagation()">
            <span class="p-inputgroup-addon">
              <i class="pi pi-search"></i>
            </span>
            <input
              type="text"
              pInputText
              placeholder="Filter"
              [(ngModel)]="filterValue"
              (keyup)="customFilterFunction($event, options)"
            />
          </div>
          <button
            pButton
            icon="pi pi-times"
            severity="secondary"
            (click)="options.reset()"
          ></button>
        </div>
      </ng-template>
    </p-select>`,
  }),
};
