// task.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { Tasks } from './table.model';

@Component({
  selector: 'numo-table-widget',
  standalone: true,
  imports: [CardModule, CommonModule, TableModule, ButtonModule, RippleModule],
  templateUrl: './table.template.html',
})
export class TableWidget {
  @Input() title: string = '';

  tasks = [...Tasks];
}
