import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: ` <p>This is a warning, you are danger.</p> `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: orange;
        border: 1px solid blue;
      }
    `,
  ],
})
export class WarningAlertComponent {}
