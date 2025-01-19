import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { Menu, MenuItem } from '../left-menu/menu.model';
import { UserMenuItems } from './user-menu.model';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { IconComponent } from '../icon/icon.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'numo-header',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    InputTextModule,
    MenuModule,
    OverlayPanelModule,
    LeftMenuComponent,
    IconComponent,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
  ],
  templateUrl: './header.template.html',
  styles: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
  isMenuVisible = false;
  @Input() isStoryBook = false;
  @ViewChild('leftMenu') leftMenu: any;
  @ViewChild('storyMenu') storyMenu: any;
  @ViewChild('userMenu') userMenu: any; // Reference to user menu
  @Output() menuClicked = new EventEmitter<boolean>(); // Emit boolean state
  @Output() userMenuItemSelected = new EventEmitter<string>(); // New event
  items: MenuItem[] = [...Menu];
  userMenuItems = [...UserMenuItems]; // Use the imported user menu items
  BreakPoint = 1024;

  toggleMenu(event: Event) {
    this.isMenuVisible = !this.isMenuVisible;

    // Get the element by ID
    const leftMenu = document.getElementById('left-menu');

    if (leftMenu) {
      // Toggle the class on the element with ID "left-menu"
      if (this.isMenuVisible) {
        leftMenu.classList.add('!left-[20px]');
      } else {
        leftMenu.classList.remove('!left-[20px]');
      }
    }

    this.menuClicked.emit(this.isMenuVisible);
  }

  closeMenu() {
    this.isMenuVisible = false;

    // Ensure the class is removed from the body when the menu is closed
    document.body.classList.remove('menu-visible');
  }

  onUserMenuItemClick(menuItem: string) {
    this.userMenuItemSelected.emit(menuItem); // Emit the selected menu item
  }

  showUserMenu(event: Event) {
    this.userMenu.toggle(event); // Show the user menu
  }
}
