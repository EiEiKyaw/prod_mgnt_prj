import { Component } from '@angular/core';

@Component({
  // method 1
  selector: 'app-server',
  // method 2
  // selector: '[app-server]',
  // method 3
  // selector: '.app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';

  getServerStatus() {}
}
