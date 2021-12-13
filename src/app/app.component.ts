import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'single-component';
  curTable = 1;
  switchTable = (tableId: any) => {
    if (tableId === 1) {
      this.curTable = 1;
    }
    else if (tableId === 2) {
      this.curTable = 2;
    }
    else if (tableId === 3) {
      this.curTable = 3;
    }
  }

}
