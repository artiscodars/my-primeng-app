// task.component.ts
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'numo-shortcut-widget',
  standalone: true,
  imports: [CardModule, CommonModule, ButtonModule],
  templateUrl: './shortcut.template.html',
})
export class ShortcutWidget {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() link: string = '';
  @Input() target: string = '';
}
