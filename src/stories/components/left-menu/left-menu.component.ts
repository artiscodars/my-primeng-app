// import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { MenuItem } from './menu.model';
import { ImportsModule } from '../../../app/imports';

@Component({
  selector: 'numo-left-menu',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './left-menu.component.html',
  styles: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeftMenuComponent {
  @Input() items: MenuItem[] = [];
  // @Input() className = '';
}
