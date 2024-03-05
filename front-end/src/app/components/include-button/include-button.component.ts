import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-include-button',
  templateUrl: './include-button.component.html',
  styleUrl: './include-button.component.css'
})
export class IncludeButtonComponent {
  constructor(private sharedService: SharedService) {}

  handleCreateClick(): void {
    this.sharedService.emitAction('create');
  }
}
