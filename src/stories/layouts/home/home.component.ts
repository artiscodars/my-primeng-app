import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';

import { HeaderComponent } from '../../components/header/header.component';
import { TableWidget } from '../../widgets/table/table.component';
import { InfoCardWidget } from '../../widgets/info-card/info-card.component';
import { ShortcutWidget } from '../../widgets/shortcut/shortcut.component';
import { NumoAlert } from '../../components/alert/alert.component';
import { ListWidget } from '../../widgets/list/list.component';

@Component({
  standalone: true,
  imports: [
    HeaderComponent,
    TableWidget,
    CardModule,
    CommonModule,
    MessageModule,
    InfoCardWidget,
    ShortcutWidget,
    NumoAlert,
    ListWidget,
  ],
  templateUrl: './home.template.html',
})
export class AppComponent {}
