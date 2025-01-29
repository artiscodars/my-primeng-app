// task.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { Tasks } from './tasks.model';

@Component({
  selector: 'numo-tasks-widget',
  standalone: true,
  imports: [CardModule, CommonModule, TableModule, ButtonModule, RippleModule],
  templateUrl: './tasks.template.html',
})
export class TasksWidget {
  tasks = [...Tasks];
}
