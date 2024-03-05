import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../User';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  isModalActive: boolean = false;
  action: string = ''; 
  newUser: User = { name: '', email: '', cep: 0, id: 0 }

  constructor(private userService: UserService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.action$.subscribe(action => {
      this.handleAction(action);
    });
  }

  handleAction(action: string): void {
    this.action = action;
    
    if (this.action === 'update') {
      this.sharedService.getUserForUpdate().subscribe(user => {
        if (user) {
          this.newUser = user;
        }
      });
    }

    this.isModalActive = true;
  }

  performUserAction(): void {
    if (this.action === 'create') {
      this.createUser();
    } else if (this.action === 'update') {
      this.updateUser();
    }
  }

  createUser(): void {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.clearFormAndCloseModal();
    });
  }

  updateUser(): void {
    this.userService.updateUser(this.newUser).subscribe(() => {
      this.clearFormAndCloseModal();
    });
  }

  private clearFormAndCloseModal(): void {
    this.newUser = { name: '', email: '', cep: 0, id: 0 };
    this.isModalActive = false;
  }
}
