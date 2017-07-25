import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';



@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})

export class StudentDataComponent implements OnInit {

  years: SelectItem[];
  yearSelected: string;

  campusNames: SelectItem[];
  campusSelected: string;

  collegeNames: SelectItem[];
  collegeSelected: string;

  students: StudentModel[] = [];
  editButtonSelected = false;

  constructor() {
    this.years = [];
    this.years.push({label: 'Year', value: null});
    this.years.push({label: '2013', value: 1});
    this.years.push({label: '2014', value: 2});
    this.years.push({label: '2015', value: 3});
    this.years.push({label: '2016', value: 4});
    this.years.push({label: '2017', value: 5});

    this.campusNames = [];
    this.campusNames.push({label: 'Select Campus Name', value: null});
    this.campusNames.push({label: 'Sample Campus 1', value: 1});
    this.campusNames.push({label: 'Sample Campus 2', value: 2});
    this.campusNames.push({label: 'Sample Campus 3', value: 3});
    this.campusNames.push({label: 'Sample Campus 4', value: 4});
    this.campusNames.push({label: 'Sample Campus 5', value: 5});

    this.collegeNames = [];
    this.collegeNames.push({label: 'Select College Name', value: null});
    this.collegeNames.push({label: 'Sample College 1', value: 1});
    this.collegeNames.push({label: 'Sample College 2', value: 2});
    this.collegeNames.push({label: 'Sample College 3', value: 3});
    this.collegeNames.push({label: 'Sample College 4', value: 4});
    this.collegeNames.push({label: 'Sample College 5', value: 5});
  }

  ngOnInit() {
    this.students.push({registration_number: '12223', college_name: 'Sample College 1',  student_name: 'Random Student 1',
      date_birth: '01/01/1998', email_address: 'randomguy1@gmail.com', tenth_percent: '100%', twelfth_percent: '100%',
      graduation_percent: '100%', postgraduation_percent: '100%', tech_score: '99%', attitude_score:  '100%', status: 'In Consideration' })

    this.students.push({registration_number: '12224', college_name: 'Sample College 2',  student_name: 'Random Student 2',
      date_birth: '01/01/1998', email_address: 'randomguy2@gmail.com', tenth_percent: '100%', twelfth_percent: '100%',
      graduation_percent: '100%', postgraduation_percent: '100%', tech_score: '99%', attitude_score:  '100%', status: 'In Consideration' })

    this.students.push({registration_number: '12225', college_name: 'Sample College 3',  student_name: 'Random Student 3',
      date_birth: '01/01/1998', email_address: 'randomguy3@gmail.com', tenth_percent: '100%', twelfth_percent: '100%',
      graduation_percent: '100%', postgraduation_percent: '100%', tech_score: '99%', attitude_score:  '100%', status: 'In Consideration' })

    this.students.push({registration_number: '12226', college_name: 'Sample College 4',  student_name: 'Random Student 4',
      date_birth: '01/01/1998', email_address: 'randomguy4@gmail.com', tenth_percent: '100%', twelfth_percent: '100%',
      graduation_percent: '100%', postgraduation_percent: '100%', tech_score: '99%', attitude_score:  '100%', status: 'In Consideration' })

    this.students.push({registration_number: '12227', college_name: 'Sample College 5',  student_name: 'Random Student 5',
      date_birth: '01/01/1998', email_address: 'randomguy5@gmail.com', tenth_percent: '100%', twelfth_percent: '100%',
      graduation_percent: '100%', postgraduation_percent: '100%', tech_score: '99%', attitude_score:  '100%', status: 'In Consideration' })
  }

  deleteStudent(i: number) {
      this.students.splice(i, 1);
    }
  editStudent() {
    this.editButtonSelected = !this.editButtonSelected
  }
  highlightRow() {
    return 'red-highlighting';
  }

};



export class StudentModel {
  registration_number: string;
  college_name: string;
  student_name: string;
  date_birth: string;
  email_address: string;
  tenth_percent: string;
  twelfth_percent: string;
  graduation_percent: string;
  postgraduation_percent: string;
  tech_score: string;
  attitude_score: string;
  status: string;
};
