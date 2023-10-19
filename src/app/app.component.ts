import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  count1 = 0;
  count2 = 0;

  increment1() {
    this.count1++;
  }
  increment2() {
    this.count2++;
  }
}
