/*import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'numo-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.template.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardComponent {
  title = 'angular-latest';
}

*/

import { Component } from '@angular/core';
import { TasksWidget } from '../../widgets/tasks/tasks.component';
//import { StatsWidget } from './components/statswidget';
//import { RecentSalesWidget } from './components/recentsaleswidget';
//import { BestSellingWidget } from './components/bestsellingwidget';
//import { RevenueStreamWidget } from './components/revenuestreamwidget';

@Component({
  selector: 'numo-dashboard',
  imports: [
    TasksWidget /* RecentSalesWidget, BestSellingWidget, RevenueStreamWidget, NotificationsWidget */,
  ],
  template: `
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-12 xl:col-span-6">
        <numo-tasks-widget />
      </div>
      <div class="col-span-12 xl:col-span-6">...</div>
    </div>
  `,
})
export class DashboardComponent {}
