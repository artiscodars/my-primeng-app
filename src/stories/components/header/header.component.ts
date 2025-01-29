import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

import { LeftMenuComponent } from '../left-menu/left-menu.component';

import { Menu, MenuItem } from '../left-menu/menu.model';
import { UserMenuItems } from './user-menu.model';

@Component({
  selector: 'numo-header',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    InputTextModule,
    MenuModule,
    LeftMenuComponent,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './header.template.html',
})
export class HeaderComponent {
  isMenuVisible = false;

  @ViewChild('leftMenu') leftMenu: any;
  @ViewChild('userMenu') userMenu: any; // Reference to user menu
  items: MenuItem[] = [...Menu];
  userMenuItems = [...UserMenuItems]; // Use the imported user menu items

  toggleMenu(event: Event) {
    this.isMenuVisible = !this.isMenuVisible;

    // Get the element by ID
    const leftMenu = document.getElementById('left-menu');

    if (leftMenu) {
      // Toggle the class on the element with ID "left-menu"
      if (this.isMenuVisible) {
        leftMenu.classList.add('left-[15px]');
        document
          .getElementById('content_holder')
          ?.classList.add('lg:pl-[285px]');
      } else {
        leftMenu.classList.remove('left-[15px]');
        document
          .getElementById('content_holder')
          ?.classList.remove('lg:pl-[285px]');
      }
    }
  }

  showUserMenu(event: Event) {
    this.userMenu.toggle(event); // Show the user menu
  }
}
