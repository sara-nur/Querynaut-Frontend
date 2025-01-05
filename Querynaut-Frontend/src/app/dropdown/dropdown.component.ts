import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-dropdown',
  standalone: true, // This component is standalone
  imports: [NgFor, FormsModule], // Import necessary modules (FormsModule for ngModel)
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() label: string = '';
  @Input() options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  @Input() selected: string = '';
  @Output() selectionChange = new EventEmitter<string>();

  dropdownId = `dropdown-${Math.random().toString(36).substring(2, 15)}`;

  onChange(value: string) {
    this.selectionChange.emit(value);
  }
}
