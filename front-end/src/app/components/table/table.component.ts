import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../User';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  users: User[] = []

  constructor(private userService: UserService) {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe((users) => (this.users = users));
  }
}
