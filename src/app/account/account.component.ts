import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // styles: [
  //   `
  //     .online {
  //       background-color: skyblue;
  //     }
  //   `,
  // ],
})
export class AccountComponent {
  accountStatus = 'offline';
  btnStatus = false;
  countClick: any[] = [];

  constructor() {
    this.accountStatus = Math.random() < 0.5 ? 'offline' : 'online';
  }

  onToggleBtn() {
    this.btnStatus = !this.btnStatus;
    // this.countClick.push(this.countClick.length + 1);
    this.countClick.push(new Date().getMilliseconds());
  }

  getBtnColor() {
    return this.btnStatus ? 'green' : 'orange';
  }

  getColor() {
    return this.accountStatus === 'offline' ? 'red' : 'green';
  }
}
