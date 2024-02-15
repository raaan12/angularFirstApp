import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  students = ['Student 1', 'Student 2']
  studentName= '' ;

  OncreateStudent(){
    this.students.push(this.studentName);
  }
}
