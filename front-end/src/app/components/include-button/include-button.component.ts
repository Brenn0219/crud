import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-include-button',
  templateUrl: './include-button.component.html',
  styleUrl: './include-button.component.css'
})
export class IncludeButtonComponent {
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  toggleUserForm() {
    this.buttonClick.emit();
  }
}
