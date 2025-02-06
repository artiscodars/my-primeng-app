import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';

import { HeaderComponent } from '../../components/header/header.component';
import { TasksWidget } from '../../widgets/tasks/tasks.component';
import { InfoCardWidget } from '../../widgets/info-card/info-card.component';
import { ShortcutWidget } from '../../widgets/shortcut/shortcut.component';
import { NumoAlert } from '../../components/alert/alert.component';

@Component({
  standalone: true,
  imports: [
    HeaderComponent,
    TasksWidget,
    CardModule,
    CommonModule,
    MessageModule,
    InfoCardWidget,
    ShortcutWidget,
    NumoAlert,
  ],
  templateUrl: './home.template.html',
})
export class AppComponent {}
