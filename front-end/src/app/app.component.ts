import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
toggleModal() {
throw new Error('Method not implemented.');
}
  title = 'front-end';

  isModalActive: boolean = false;

  toggleModalVisibility() {
    console.log("teste")
    this.isModalActive = !this.isModalActive;
  }
}
