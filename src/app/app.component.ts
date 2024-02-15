import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username= '' ;
  deleteMessage: string = '';
  deleteUsername() {
    this.deleteMessage = `Username '${this.username}' was deleted.`;
    this.username = '';
  }
  }
