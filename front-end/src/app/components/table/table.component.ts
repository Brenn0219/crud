import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../User';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  users: User[] = []
  user!: User

  constructor(private userService: UserService, private sharedService: SharedService) {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe((users) => (this.users = users));
  }

  handleUpdateClick(user: User): void {
    this.sharedService.emitAction('update');
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(u => u.id !== id);
    });
  }
}