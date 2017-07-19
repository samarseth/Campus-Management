import {Component, OnInit} from '@angular/core';
import {Campus} from '../../model/Campus';
import {Student} from '../../model/Student';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-college-student',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('300ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('300ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './college-student.component.html',
  styleUrls: ['./college-student.component.css']
})
export class CollegeStudentComponent implements OnInit {

  campus: Campus;
  students: Student[];
  studentToAdd: Student;
  studentFormVisible: boolean;
  tableEditable: boolean;

  constructor() {
    this.campus = new Campus();
    this.students = [];
    this.studentToAdd = new Student();
    this.studentFormVisible = false;
    this.tableEditable = false;
  }

  ngOnInit() {
    this.campus = {campus_code: 'CQUEJFS', campus_date: new Date(), lms_group_name: 'HHAW' };
    this.students.push({registration_number: '000001', roll_number: '147852',
      first_name: 'Pierre', middle_name: 'Luc', last_name: ' Bazin',
      date_birth: null, email_address: 'pierre.bazin@soprasteria.com',
      mobile_number: '0617904818'});
    this.students.push({registration_number: '000002', roll_number: '147554',
      first_name: 'Hugo', middle_name: 'Luc', last_name: ' Blanc',
      date_birth: null, email_address: 'hugo.blanc@soprasteria.com',
      mobile_number: '0685412541'});
    this.students.push({registration_number: '000003', roll_number: '142452',
      first_name: 'Nathan', middle_name: 'Luc', last_name: 'Janod',
      date_birth: null, email_address: 'nathan.janod@soprasteria.com',
      mobile_number: '0645128425'});
    this.students.push({registration_number: '000003', roll_number: '142452',
      first_name: 'Nathan', middle_name: 'Luc', last_name: 'Janod',
      date_birth: null, email_address: 'nathan.janod@soprasteria.com',
      mobile_number: '0645128425'});
    this.students.push({registration_number: '000003', roll_number: '142452',
      first_name: 'Nathan', middle_name: 'Luc', last_name: 'Janod',
      date_birth: null, email_address: 'nathan.janod@soprasteria.com',
      mobile_number: '0645128425'});
    this.students.push({registration_number: '000003', roll_number: '142452',
      first_name: 'Nathan', middle_name: 'Luc', last_name: 'Janod',
      date_birth: null, email_address: 'nathan.janod@soprasteria.com',
      mobile_number: '0645128425'});
    this.students.push({registration_number: '000003', roll_number: '142452',
      first_name: 'Nathan', middle_name: 'Luc', last_name: 'Janod',
      date_birth: null, email_address: 'nathan.janod@soprasteria.com',
      mobile_number: '0645128425'});
    this.students.push({registration_number: '000003', roll_number: '142452',
      first_name: 'Nathan', middle_name: 'Luc', last_name: 'Janod',
      date_birth: null, email_address: 'nathan.janod@soprasteria.com',
      mobile_number: '0645128425'});
    this.students.push({registration_number: '000003', roll_number: '142452',
      first_name: 'Nathan', middle_name: 'Luc', last_name: 'Janod',
      date_birth: null, email_address: 'nathan.janod@soprasteria.com',
      mobile_number: '0645128425'});
    this.students.push({registration_number: '000003', roll_number: '142452',
      first_name: 'Nathan', middle_name: 'Luc', last_name: 'Janod',
      date_birth: null, email_address: 'nathan.janod@soprasteria.com',
      mobile_number: '0645128425'});
    this.students.push({registration_number: '000003', roll_number: '142452',
      first_name: 'Nathan', middle_name: 'Luc', last_name: 'Janod',
      date_birth: null, email_address: 'nathan.janod@soprasteria.com',
      mobile_number: '0645128425'});
    this.students.push({registration_number: '000003', roll_number: '142452',
      first_name: 'Nathan', middle_name: 'Luc', last_name: 'Janod',
      date_birth: null, email_address: 'nathan.janod@soprasteria.com',
      mobile_number: '0645128425'});
    this.students.push({registration_number: '000003', roll_number: '142452',
      first_name: 'Nathan', middle_name: 'Luc', last_name: 'Janod',
      date_birth: null, email_address: 'nathan.janod@soprasteria.com',
      mobile_number: '0645128425'});
  }


  addStudentToCollege(): void {
    this.students.push(this.studentToAdd);
    this.studentToAdd = new Student();
  }


  toggleAddStudentForm(): void {
    this.studentToAdd = new Student();
    this.studentFormVisible = !this.studentFormVisible;
  }

  /** Function -> toggle the property tableEditable to allow edition in the collegeCampus table */
  toggleTableEditable(): void {
    this.tableEditable = !this.tableEditable;
  }


  uploadAuto(event) {
    // todo
  }

  showDialogFinalSubmit(): void {
    // joitjew
  }
}
