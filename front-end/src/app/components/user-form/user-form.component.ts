import { Component, OnInit, Output } from '@angular/core';
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
  @Output() user: User = {
    id: 0,
    name: '',
    email: '',
    cep: '',
    publicPlace: '',
    neighborhood: '',
    uf: ''
  };

  formErrors = {
    name: false,
    email: false,
  };

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
          this.user = user;
        }
      });
    }

    this.isModalActive = true;
  }

  performUserAction(): void {
    if (this.validateUserData()) {
      if (this.action === 'create') {
        this.createUser();
      } else if (this.action === 'update') {
        this.updateUser();
      }
    } 
  }

  validateUserData(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o email

    let isValid = true;

    if (!this.user.name.trim()) {
        this.formErrors.name = true;
        isValid = false;
    } else {
        this.formErrors.name = false;
    }

    if (!this.user.email.trim().match(emailPattern)) {
        this.formErrors.email = true;
        isValid = false;
    } else {
        this.formErrors.email = false;
    }

    return isValid;
  }

  createUser(): void {
    this.userService.createUser(this.user).subscribe(() => {
      this.clearFormAndCloseModal();
      this.userService.emitUserDataChanged();
    });
  }

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe(() => {
      this.clearFormAndCloseModal();
      this.userService.emitUserDataChanged();
    });
  }

  private clearFormAndCloseModal(): void {
    this.user = { id: 0, name: '', email: '', cep: '', publicPlace: '', neighborhood: '', uf: ''};
    this.isModalActive = false;
  }
}
