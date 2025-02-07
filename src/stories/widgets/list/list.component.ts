// task.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';

import { Tasks } from './list.model';

@Component({
  selector: 'numo-list-widget',
  standalone: true,
  imports: [
    CardModule,
    CommonModule,
    ButtonModule,
    RippleModule,
    DataViewModule,
  ],
  templateUrl: './list.template.html',
})
export class ListWidget {
  @Input() title: string = '';

  tasks = [...Tasks];
}
