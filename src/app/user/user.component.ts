import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  username = '';
  createUserStatus = false;

  onResetUser() {
    this.username = '';
  }

  onCreateUser() {
    this.createUserStatus = true;
  }
}
