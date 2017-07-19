import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  /* The following code creates a two way binding between the input text fields in the HTML page and their corresponding variables */
  yearNumber: number;
  campusName = '';
  registrationNumber: number;
  firstName = '';
  middleName = '';
  lastName = '';
  universityNumber: number;
  emailAdd = '';
  mobileNumber: number;
  DOB: number;
  tenthPercentage: number;
  tenthPassing: number;
  academicBoard = '';

  /*  END   */

  colleges: SelectItem[];
  genders: SelectItem[];
  courses: SelectItem[];
  PGcourses: SelectItem[];

  selectedValue: ModelComponent;
  selectedGender = '';
  selectedCollege = '';
  selectedPGCourse = '';
  selectedCourse = '';
  constructor() {
    this.colleges = [];
    this.colleges.push({label: ' Select College Name', value: null});
    this.colleges.push({label: 'A University', value: '1'});
    this.colleges.push({label: 'B University', value: '2'});
    this.colleges.push({label: 'C University', value: '3'});
    this.genders = [];
    this.genders.push({label: 'Gender', value: null});
    this.genders.push({label: 'Male', value: '1'});
    this.genders.push({label: 'Female', value: '2'});
    this.courses = [];
    this.courses.push({label: 'Select Graduation Course', value: '1'});
    this.courses.push({label: 'Course X', value: '1'});
    this.courses.push({label: 'Course Y', value: '2'});
    this.courses.push({label: 'Course Z', value: '3'});
    this.PGcourses = [];
    this.PGcourses.push({label: 'Select Graduation Course', value: '1'});
    this.PGcourses.push({label: 'Course X', value: '1'});
    this.PGcourses.push({label: 'Course Y', value: '2'});
    this.PGcourses.push({label: 'Course Z', value: '3'});
  }

  ngOnInit() {
  }
  onclick() {}
  onclick2() {}
}
export class ModelComponent {
  selectedValue: string = '';
}
