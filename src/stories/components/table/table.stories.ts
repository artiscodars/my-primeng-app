import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import description from './table.description.md'; // Import the markdown file
import { ImportsModule } from '../../../app/imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';

import { IconComponent } from '../icon/icon.component';

import { TableData, TableData2, Products } from './table.data';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta = {
  title: 'Components/Table',
  decorators: [
    moduleMetadata({
      imports: [
        ImportsModule,
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        IconComponent,
      ],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {},
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    products: [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
      {
        id: '1001',
        code: 'f230fh0g3',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'Black-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 20,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>`,
  }),
};

class TableDemo {
  getSeverity(status: string) {
    switch (status) {
      case 'Standarta':
        return 'secondary';
      case 'Nestandarta':
        return 'danger';
      default:
        return 'info';
    }
  }
}

export const ForDataView: Story = {
  args: {
    TableData: [...TableData],
    TableData2: [...TableData2],
    Products: [...Products],
  },

  render: (args) => {
    let expandedRows: { [key: string]: boolean } = {};

    const isRowExpanded = (product: any) => !!expandedRows[product.id];
    const toggleRow = (product: any) => {
      if (expandedRows[product.id]) {
        delete expandedRows[product.id];
      } else {
        expandedRows[product.id] = true;
      }
    };

    return {
      props: {
        ...args,
        getSeverity: (status: any) => new TableDemo().getSeverity(status),
        isRowExpanded,
        toggleRow,
      },
      template: `
         <p-table [value]="Products" dataKey="id">
                <!-- Body Template for Product Rows -->
                <ng-template pTemplate="body" let-product>
                  <tr>
                    <!-- Caret Icon for Expand/Collapse -->

                    <td>
                      <div class="flex flex-wrap items-center gap-2">
                        <p-button severity="secondary" [text]="true" (click)="toggleRow(product)">
                          <span class="material-symbols-rounded">
                            {{ isRowExpanded(product) ? 'expand_more' :
                            'chevron_right' }}
                          </span>
                        </p-button>

                        <span
                          class="flex items-center justify-content-center font-semibold white-space-nowrap">{{product.name}}</span>
                        <p-badge [value]="product.badgeName" [severity]="product.badgeSeverity"
                          class="flex items-center justify-content-center" styleClass="text-xs font-normal"></p-badge>
                      </div>
                    </td>
                    <td>
                      <div class="flex flex-wrap gap-2">
                        <p-badge *ngFor="let day of ['P', 'O', 'T', 'C', 'P', 'S', 'S']; let i = index" [value]="day"
                          [severity]="product.days.includes(i + 1) ? 'info' : 'secondary'"
                          [styleClass]="product.days.includes(i + 1) ? 'font-semibold' : 'font-normal'" />
                        <p-badge *ngFor="let date of product.dates" severity="info" [value]="date" ></p-badge>
                      </div>
                    </td>
                    <td>
                      <div class="flex flex-wrap gap-2">
                        <p-chip *ngFor="let slot of product.slots" [label]="slot"
                          styleClass="white-space-nowrap text-xs py-[4px] bg-gray-100 text-gray-900" />
                      </div>
                    </td>
                    <td>
                      <div class="flex w-full justify-content-between gap-3 md:justify-content-end">
                        <p-button severity="secondary" [text]="true">
                          <span class="material-symbols-rounded"> edit </span>
                        </p-button>

                        <p-button severity="danger" [text]="true">
                          <span class="material-symbols-rounded"> delete </span>
                        </p-button>
                      </div>
                    </td>
                  </tr>
                  <!-- Expanded Row Content -->
                  <tr *ngIf="isRowExpanded(product)">
                    <td colspan="4">
                      <div class="p-2">
                        <h3>Darba laiki</h3>
                        <p-table [value]="tableData" [tableStyle]="{ ' min-width': '50rem' }">
                          <ng-template pTemplate="header">
                  <tr>
                    <th>Darba laiks</th>
                    <th>Pārtraukums</th>
                    <th>Darba vieta</th>
                  </tr>
                </ng-template>
                <ng-template pTemplate="body" let-innerProduct>
                  <tr>
                    <td>{{ innerProduct.darbaLaiks }}</td>
                    <td>{{ innerProduct.partraukums }}</td>
                    <td>{{ innerProduct.darbaVieta }}</td>
                  </tr>
                </ng-template>
              </p-table>

              <h3 class="mt-4">Vajadzības</h3>
              <p-table [value]="tableData2" [tableStyle]="{ 'min-width': '50rem' }">
                <ng-template pTemplate="header">
                  <tr>
                    <th>Amats</th>
                    <th>Kompetence</th>
                    <th>Kompetenču skaits</th>
                    <th>Darbnieku skaits</th>
                  </tr>
                </ng-template>
                <ng-template pTemplate="body" let-innerProduct>
                  <tr>
                    <td>{{ innerProduct.amats }}</td>
                    <td>{{ innerProduct.kompetence }}</td>
                    <td>{{ innerProduct.kompetencuSkaits }}</td>
                    <td>{{ innerProduct.darbniekuSkaits }}</td>
                  </tr>
                </ng-template>
              </p-table>
            </div>
            </td>
            </tr>
            </ng-template>
            </p-table>
      `,
    };
  },
};
