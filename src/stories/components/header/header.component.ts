import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

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
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Ensure content_holder gets the default class when component loads
    document.getElementById('content_holder')?.classList.add('lg:pl-[285px]');
    document.getElementById('left-menu')?.classList.add('-left-[350px]');
    document.getElementById('left-menu')?.classList.add('lg:left-[15px]');
  }

  @ViewChild('leftMenu') leftMenu: any;
  @ViewChild('userMenu') userMenu: any; // Reference to user menu
  items: MenuItem[] = [...Menu];
  userMenuItems = [...UserMenuItems]; // Use the imported user menu items

  toggleMenu() {
    const leftMenu = document.getElementById('left-menu');
    const contentHolder = document.getElementById('content_holder');
    const screenWidth = window.innerWidth;

    if (leftMenu) {
      if (screenWidth < 1024) {
        leftMenu.classList.toggle('-left-[350px]');
      } else {
        leftMenu.classList.toggle('lg:left-[15px]');
      }
    }

    if (contentHolder) {
      contentHolder.classList.toggle('lg:pl-[285px]');
    }
  }

  showUserMenu(event: Event) {
    this.userMenu.toggle(event); // Show the user menu
  }

  toggleSearch() {
    console.log('Search toggled');
    const search = document.getElementById('search');
    const screenWidth = window.innerWidth;

    if (search) {
      // if (screenWidth < 1024) {
      search.classList.toggle('-top-52');
      search.classList.toggle('w-full');
      //  search.classList.toggle('left-0');
      //   search.classList.toggle('right-0');
      search.classList.toggle('top-0');
      //  search.classList.toggle('p-4');
      //   search.classList.toggle('bg-white');
      //  search.classList.toggle('z-50');
      //   } else {
      //    search.classList.toggle('lg:left-[15px]');
      //  }
    }
  }
}
