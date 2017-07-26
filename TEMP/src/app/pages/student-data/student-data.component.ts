import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {ServiceUtilsService} from '../../utils/services/service-utils/service-utils.service';
import {Campus} from '../../model/Campus';
import {CollegeService} from '../../services/college/college.service';
import {College} from '../../model/College';
import {CollegeYearService} from '../../services/college-year/college-year.service';
import {CollegeYear} from '../../model/CollegeYear';
import {StudentDetails} from '../../model/student-details';
import {StudentService} from '../../services/student/student.service';



@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})

export class StudentDataComponent implements OnInit {


  yearSelectItem: SelectItem[];
  selectedYear: number;
  yearSelectedFlag: boolean;

  campusSelectItem: SelectItem[];
  selectedCampus: College;
  campusSelectedFlag: boolean;

  collegeYearSelectItem: SelectItem[];
  selectedCollegeYear: CollegeYear;

  students: StudentDetails[];

  editButtonSelected = false;

  constructor(private serviceUtils: ServiceUtilsService,
              private collegeService: CollegeService,
              private collegeYearService: CollegeYearService,
              private studentService: StudentService) {

    this.initialize();

  }

  ngOnInit() {

  }



  yearIsSelected(event): void {
    this.yearSelectedFlag = true;
    this.campusSelectedFlag = false;
    this.campusSelectItem = [];
    this.collegeYearSelectItem = [];
    this.collegeService.getCollegesAreCampusInYear(event.value).subscribe(
      colleges => {
        for ( const college of colleges ) {
          this.campusSelectItem.push({label: college.collegeName, value: college});
        }
      }
    );
  }

  campusIsSelected(): void {
    this.campusSelectedFlag = true;
    this.collegeYearSelectItem = [];
    const param: Map<string, string> = new Map();
    param.set('collegeCode', this.selectedCampus.collegeCode);
    param.set('year', this.selectedYear.toString());
    this.collegeYearService.getCollegesYear(param).subscribe(
      collegesYear => {
        for (const collegeYear of collegesYear ) {
          this.collegeYearSelectItem.push({label: collegeYear.college.collegeName, value: collegeYear});
        }
      }
    );
  }

  collegeYearIsSelected(): void {
    this.students = [];
    this.studentService.getStudentByCollegeYear(this.selectedCollegeYear).subscribe(
      students => {
        for ( const student of students ) {
          this.students.push(student);
        }
      }
    );
  }

  editStudent() {
    this.editButtonSelected = !this.editButtonSelected
  }

  /** Function to initialize the screen and clear all the screen */
  initialize(): void {
    this.yearSelectItem = [];
    this.yearSelectItem = this.serviceUtils.getYearSelectItems();
    this.selectedYear = (new Date()).getFullYear() - 1;
    this.yearSelectedFlag = true;

    this.campusSelectItem = [];
    this.campusSelectedFlag = false;

    this.collegeYearSelectItem = [];
  }

}
