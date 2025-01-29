import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Select } from 'primeng/select';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import {
  MenuItem,
  TableData,
  TableData2,
  Products,
  TimePlanning,
} from './timeplanning.data';

import { HeaderComponent } from '../../components/header/header.component';
import { TimePickerComponent } from '../../components/time-picker/time-picker.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    CardModule,
    CommonModule,
    BreadcrumbModule,
    Select,
    CalendarModule,
    TabViewModule,
    MenuModule,
    ButtonModule,
    TableModule,
    BadgeModule,
    InputGroupModule,
    InputGroupAddonModule,
    ChipModule,
    CheckboxModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    TimePickerComponent,
  ],
  templateUrl: './timeplaning.template.html',
})
export class AppComponent {
  isMenuVisible = false;
  title = 'angular-latest';
  expandedRows: any[] = [];
  home = { icon: 'pi pi-home', route: '/' };
  date: Date[] | undefined;
  tableData = TableData;
  tableData2 = TableData2;
  Products = Products;
  menuItems = MenuItem;
  timePlanning = TimePlanning;

  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() min: string = '';
  @Input() max: string = '';
  @Input() step: string = '';

  @Input() class: string = '';

  @Input() value: string = '';

  breakOptions = ['15 min', '30 min', '45 min', '1 h', '1.5 h', '2 h'];
  placeOptions = ['Barona ielas veikals', 'Dzelzavas ielas veikals'];
  groupOptions = ['Grupa 1', 'Grupa 2', 'Grupa 3'];
  amatsOptions = ['Konsultants', 'Vadītājs', 'Kases darbinieks'];
  kompetencesOptions = ['Kases darbs', 'Preču uzpakošana', 'Preču izkraušana'];

  // Sum of planning hours for all employees
  get totalPlanningHours(): number {
    return this.timePlanning.reduce((sum, emp) => sum + emp.planningHours, 0);
  }

  // Sum of total hours for all employees
  get totalHours(): number {
    return this.timePlanning.reduce((sum, emp) => sum + emp.totalHours, 0);
  }

  // Total hours per day across all employees
  get dailyTotals(): number[] {
    if (this.timePlanning.length === 0) return [];
    const daysInMonth = this.timePlanning[0].daysOfMonth.length;

    return Array.from({ length: daysInMonth }, (_, dayIndex) =>
      this.timePlanning.reduce(
        (sum, emp) => sum + (emp.daysOfMonth[dayIndex]?.hours || 0),
        0
      )
    );
  }

  // Method to toggle row expansion
  toggleRow(product: any) {
    const index = this.expandedRows.indexOf(product.id);
    if (index !== -1) {
      // Row is already expanded, so collapse it
      this.expandedRows.splice(index, 1);
    } else {
      // Row is not expanded, so expand it
      this.expandedRows.push(product.id);
    }
  }

  // Method to check if a row is expanded
  isRowExpanded(product: any): boolean {
    return this.expandedRows.includes(product.id);
  }
  options = [
    {
      name: 'Barona ielas veikals',
    },
  ];
  breadCrumbItems = [{ label: 'Darba laika plānošana', route: '/timeplaning' }];

  itemsWithIsLast = this.breadCrumbItems.map((item, index, array) => ({
    ...item,
    isLast: index === array.length - 1,
  }));

  // Variable to control the visibility of the 'Add Data' modal dialog
  displayAddDataDialog: boolean = false;

  // Object to hold new data from the form
  newData: any = {};

  // Method to open the dialog
  showAddDataDialog() {
    this.displayAddDataDialog = true;
  }

  // Method to close the dialog
  hideAddDataDialog() {
    this.displayAddDataDialog = false;
  }

  // Method to save the data
  saveData() {
    // Implement the logic to save data
    console.log('Data saved:', this.newData);
    // Close the dialog
    this.hideAddDataDialog();
  }
}
