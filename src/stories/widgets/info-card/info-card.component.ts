// task.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'numo-info-card-widget',
  standalone: true,
  imports: [CardModule, CommonModule, ButtonModule],
  templateUrl: './info-card.template.html',
})
export class InfoCardWidget {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() value: string = '';
}
