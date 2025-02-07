// alert.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'numo-alert',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './alert.template.html',
})
export class NumoAlert {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() showCloseButton: boolean = false;
  @Input() severity: 'info' | 'success' | 'warning' | 'error' = 'info';

  isVisible = true;
  alertClass = '';

  ngOnInit() {
    this.setAlertClass();
  }

  setAlertClass() {
    const severityClasses: Record<string, string> = {
      info: 'bg-[#d1e4ff] border-blue-500',
      success: 'bg-[#d4edda] border-green-500',
      warning: 'bg-[#fff3cd] border-yellow-500',
      error: 'bg-[#f8d7da] border-red-500',
    };
    this.alertClass = severityClasses[this.severity] || severityClasses['info'];
  }

  closeAlert() {
    this.isVisible = false; // Hide the entire alert
  }
}
