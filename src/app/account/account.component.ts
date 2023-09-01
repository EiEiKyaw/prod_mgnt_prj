import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  accountStatus = 'offline';

  constructor() {
    this.accountStatus = Math.random() < 0.5 ? 'offline' : 'online';
  }

  getColor() {
    return this.accountStatus === 'offline' ? 'red' : 'green';
  }
}
