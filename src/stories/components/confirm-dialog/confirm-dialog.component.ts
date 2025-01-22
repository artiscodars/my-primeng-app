import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

export interface ConfirmDialogComponent {
  message: string;
}

@Component({
  selector: 'numo-confirm-dialog',
  templateUrl: './confirm-dialog-template.html',
  standalone: true,
  imports: [ConfirmDialog, ToastModule, ButtonModule],
  providers: [ConfirmationService, MessageService],
})
export class ConfirmDialogComponent {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirm() {
    this.confirmationService.confirm({
      header: 'Confirmation',
      message: 'Please confirm to proceed moving forward.',

      acceptButtonProps: {
        label: 'Save',
        icon: 'pi pi-check',
        size: 'small',
      },
      rejectButtonProps: {
        label: 'Cancel',
        icon: 'pi pi-times',
        outlined: true,
        size: 'small',
      },

      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
          life: 3000,
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Rejected',
          detail: 'You have rejected',
          life: 3000,
        });
      },
    });
  }
}
