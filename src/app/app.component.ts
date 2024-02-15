import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username= '' ;
  deleteMessage: string = '';
  students = ['Student 1', 'Student 2']
  deleteUsername() {
    this.deleteMessage = `Username '${this.username}' was deleted.`;
    this.username = '';
  }
    getColor(){
      return this.deleteMessage === '' ? 'green' : 'red';
    }
  OncreateStudent(){
    this.students.push(this.username);
  }
}
