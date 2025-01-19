import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'basic-select',
  standalone: true, // Mark as standalone
  imports: [CommonModule, SelectModule], // Import necessary modules
  templateUrl: './select.component.html',
})
export class BasicSelectComponent {
  // Inputs with default values
  @Input() label: string = 'Select a City';
  @Input() cities: { name: string; code: string }[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
}
