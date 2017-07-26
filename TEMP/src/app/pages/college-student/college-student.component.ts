import { ServiceOption } from '../../utils/service-option';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import 'rxjs/add/operator/switchMap';

import { Campus } from '../../model/Campus';
import { Student } from '../../model/Student';
import { StudentIHM } from '../../model/StudentIHM';
import { AbstractService } from '../../services/abstract/abstract.service';
import { CollegeYearService } from '../../services/college-year/college-year.service';
import { TokenManager } from '../../utils/token-manager';
import { StudentService } from '../../services/student/student.service';
import {CustomValidator} from '../../utils/validators/CustomValidator';
import {UserBasicValidator} from '../../utils/validators/UserBasicValidator';

@Component({
  selector: 'app-college-student',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateY(100%)', opacity: 0 }),
          animate('300ms', style({ transform: 'translateY(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateY(0)', opacity: 1 }),
          animate('300ms', style({ transform: 'translateY(100%)', opacity: 0 }))
        ])
      ]
    )
  ],
  templateUrl: './college-student.component.html',
  styleUrls: ['./college-student.component.css']
})
export class CollegeStudentComponent implements OnInit {

  campus: Campus;
  students: StudentIHM[];
  studentToAdd: StudentIHM;
  studentFormVisible: boolean;
  tableEditable: boolean;
  date: Date;

  constructor(public route: ActivatedRoute,
    public abstractService: AbstractService,
    public collegeYearService: CollegeYearService,
    public tokenManager: TokenManager,
    public studentService: StudentService) {
    this.campus = new Campus(null);
    this.students = [];
    this.studentToAdd = new StudentIHM();
    this.studentFormVisible = false;
    this.tableEditable = false;
  }

  ngOnInit() {

    this.date = new Date();

    this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.tokenManager.setToken(params.get('token'));

        this.studentService.getStudentBytoken(new Map())
          .subscribe((data) => {
            for (const student of data){
              const convertStudent = new StudentIHM();
              convertStudent.convertStudentToStudentIHM(student);
              this.students.push(convertStudent);
            }
            console.log(this.students);
          },
          (error) => {
            console.log(error);
          });

      });


    // this.campus = { campus_code: 'CQUEJFS', campus_date: new Date(), lms_group_name: 'HHAW' };


    this.validStudents();
  }


  addStudentToCollege(): void {
    this.students.push(this.studentToAdd);
    this.studentToAdd = new StudentIHM();
  }


  toggleAddStudentForm(): void {
    this.studentToAdd = new StudentIHM();
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

  validStudents(): void {
    for (const student of this.students) {
      CustomValidator.validate(student, new UserBasicValidator());
    }
  }

  /** Function -> Delete this row college from campusColleges List */
  deleteCollege(index: number): void {
    this.students.splice(index, 1);
  }
}
