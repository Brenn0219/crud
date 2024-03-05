import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() isModalActive: boolean = false;
  newUser: User = {
    name: '', email: '', cep: -1,
    id: -1
  }; 

  constructor(private userService: UserService) { }

  toggleModal(): void {
    this.isModalActive = !this.isModalActive;
  }

  createUser(): void {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.newUser = { name: '', email: '', cep: -1, id: -1 };
      this.isModalActive = false;
    });
  }
}
