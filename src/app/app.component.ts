import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None, //allow component to style html, body
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor() {
    console.log('app is online');
  }

}
