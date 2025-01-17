import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { WindowMaximizeIcon } from 'primeng/icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  imports: [ButtonModule, RippleModule, WindowMaximizeIcon],
  standalone: true, // If you are using Angular standalone components
})
export class ButtonComponent {}
