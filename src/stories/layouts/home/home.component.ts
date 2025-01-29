import { Component /*, CUSTOM_ELEMENTS_SCHEMA */ } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TasksWidget } from '../../widgets/tasks/tasks.component';
//import { Menu } from '../../components/left-menu/menu.model';
//import { Tasks } from '../../widgets/tasks/tasks.model';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  // selector: "numo-home",
  standalone: true,
  imports: [HeaderComponent, TasksWidget, CardModule, CommonModule],
  templateUrl: './home.template.html',
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  // isMenuVisible = false;
  // title = 'angular-latest';
  // items = [{ label: 'UZDEVUMI', menu: [...Menu] }];
  //  tasks = [...Tasks];
  //  toggleMenu(isMenuVisible: boolean) {
  //   this.isMenuVisible = isMenuVisible;
  //  }
}
