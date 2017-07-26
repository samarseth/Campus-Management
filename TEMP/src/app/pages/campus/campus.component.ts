 import { Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/primeng';
import {College} from '../../model/College';
import {Campus} from '../../model/Campus';
import {CollegeYearService} from '../../services/college-year/college-year.service';
import {CollegeYear} from '../../model/CollegeYear';
import {CampusService} from '../../services/campus/campus.service';
import {ServiceOption} from 'app/utils/service-option';
import {ServiceUtilsService} from '../../utils/services/service-utils/service-utils.service';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css'],
  providers: [CollegeYearService, CampusService, ServiceUtilsService]
})
export class CampusComponent implements OnInit {

  /** Dropdown to select year of the campus */
  yearSelectItem: SelectItem[];
  /** Colleges list which can be selected in campus dropdown list */
  colleges: SelectItem[];
  /** CollegesYear list which can be selected in college to add */
  collegesYearToAddItem: SelectItem[];
  /** List of the campus's colleges */
  collegesCampusCollegesYear: College[];
  /** College which is selected by the top dropdown list */
  selectedCollegeYear: CollegeYear;
  /** Variable which in we receive collegeYear Data from the api*/
  collegesYear: CollegeYear[];
  /** Campus which is created by the selectedCollegeYear */
  selectedCampus: Campus;
  /** Colleges list which is associated with the selected campus */
  campusCollegesYear: CollegeYear[];
  /** College which has been selected with the bottom dropdown list
   *  in order to add this college to the selected campus college list */
  selectedCollegeYearToAdd: CollegeYear;
  /** Year selected by the dropdown */
  selectedYear: string;
  /** Property which allow data table edition */
  tableEditable: boolean;
  /** Property which show the dialog to create Campus from the selectedCollegeYear */
  displayDialogCollegeBecomeCampus: boolean;
  /** Property which show the dialog to confirm final submit */
  displayDialogFinalSubmit: boolean;
  /** Property to disabled the college adding button */
  addCollegeButton: boolean;
  /** Property to know if a year is selected */
  yearSelected: boolean;
  /** Property to know if a campus is selected */
  campusSelected: boolean;
  /** Message which is appear when button change is clicked*/
  msgs: Message[] = [];
  /** Error messages returned by the api */
  errorMessage: string;
  /** Object param to give to the api */
  param: Map<string, string>;

  campusUpdated: boolean;

  constructor(private collegeYearService: CollegeYearService,
              private campusService: CampusService,
              private serviceUtils: ServiceUtilsService) {
    // Initialize composant
    this.yearSelectItem = [];
    this.campusCollegesYear = [];
    this.colleges = [];
    this.collegesYearToAddItem = [];
    this.collegesYear = [];
    this.collegesCampusCollegesYear = [];
    this.tableEditable = false;
    this.displayDialogCollegeBecomeCampus = false;
    this.displayDialogFinalSubmit = false;
    this.addCollegeButton = true;
    this.yearSelected = false;
    this.campusSelected = false;
    this.campusUpdated = false;
    this.selectedCollegeYearToAdd = new CollegeYear(null, null, null);
    this.selectedCollegeYear = new CollegeYear(null, null, null);
    this.yearSelectItem = this.serviceUtils.getYearSelectItems();
    this.selectedCampus = new Campus(null);
  }

  ngOnInit() {
  }

  /** Function put yearSelected to true and run CollegeYear Research in database
   * with the selectedYear at paramater
   */
  yearIsSelected(): void {
    this.yearSelected = true;
    this.param = new Map();
    this.param.set('year', this.selectedYear);
    this.getCollegeYearByYear(this.param);
  }

  save(): void {
    console.log(this.selectedCampus);
    if ( !this.selectedCampus.isEmpty()) {
      this.putCampusSelected();
      this.putCollegesYear();
      this.getCollegeYearToAddItem();
    } else {
      this.showMessage('error', 'Error !', 'No campus selected');
    }


  }

  putCampusSelected(): void {
    this.campusService.putCampus(this.selectedCampus).subscribe(
      campus => {
        this.campusUpdated = false;
        this.showMessage('success', 'Changes saved !', 'Yours changes have been saved');
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }

  putCollegesYear(): void {
      this.collegeYearService.putCollegesYear(this.campusCollegesYear)
        .subscribe(
          collegesYear => {
            this.getCollegeYearByCampusId();
            this.showMessage('success', 'Changes saved !', 'Yours changes have been saved');
          },
          error => {
            this.errorMessage = <any>error;
          }
        );
  }


  getCollegeYearByYear(param: Map<string, string>): void {
    this.collegeYearService.getCollegesYear(param)
      .subscribe(
        collegesYear => {
          this.collegesYear  =  <CollegeYear[]> collegesYear;
          for ( const collegeYear of this.collegesYear ) {
            this.colleges.push({label: collegeYear.college.collegeName, value: collegeYear});
            // this.collegesYearToAddItem.push({label: collegeYear.college.collegeName, value: collegeYear});
          }
        },
        error => {
          this.errorMessage = <any>error;
        });
  }

  getCollegeYearByCampusId(): void {
    this.campusCollegesYear = [];
    this.collegesCampusCollegesYear = [];
    const param = new Map();
    param.set('campusId', this.selectedCampus.id);
    this.collegeYearService.getCollegesYear(param)
      .subscribe(
        collegesYear => {
          for ( const collegeYear of <CollegeYear[]> collegesYear ) {
            this.campusCollegesYear.push(collegeYear);
            // test
            this.collegesCampusCollegesYear.push(collegeYear.college);
          }
        },
        error => {
          this.errorMessage = <any>error;
        });
  }

  /** Function -> Add selectedCollegeToAdd to campusColleges List */
  addToCampusColleges(): void {
    this.campusUpdated = true;
    this.selectedCollegeYearToAdd.campus = this.selectedCampus;
    this.campusCollegesYear.push(this.selectedCollegeYearToAdd);
    this.collegesCampusCollegesYear.push(this.selectedCollegeYearToAdd.college);
    this.selectedCollegeYearToAdd = new CollegeYear(null, null, null);
    this.getCollegeYearToAddItem();
  }

  /** Function -> Delete this row college from campusCollegesYear Array */
  deleteCollege(college: College): void {
    /*
      We will receive a college object, after we find the element in campusCollegeYear
      which is match with this college and we put this element.campus to null
    */
    this.campusUpdated = true; // To disabled change selected campus
    this.campusCollegesYear.find(item => item.college.collegeCode === college.collegeCode).campus = null;
    this.colleges.find(item => item.value.college.collegeCode === college.collegeCode).value.campus = null;
    this.getCollegeYearToAddItem();
  }

  updateCollegeRow(event) {
    this.campusUpdated = true; // To disabled change selected campus
    this.campusCollegesYear.find(item => item.college.collegeCode === event.data.collegeCode).college = event.data;
    this.colleges.find(item => item.value.college.collegeCode === event.data.collegeCode).value.college = event.data;
    this.getCollegeYearToAddItem();
  }

  /** Function -> check if the selectedCollegeYear is a Campus or not.
   * If it is, it will be the selectedCampus
   * else open the dialog */
  checkCollegeIsCampus(): void {
    // check if the college is a campus
    // yes
    // return l'object campus en base et mettre dans selectedCampus
    if ( this.selectedCollegeYear.campus != null ) {
      if ( 'C' +  this.selectedCollegeYear.college.collegeCode === this.selectedCollegeYear.campus.campusCode) { // This college is a campus
        this.selectedCollegeYear.campus.campusDate = new Date(this.selectedCollegeYear.campus.campusDate); // Date transformation
        this.selectedCampus = new Campus(this.selectedCollegeYear.campus);
        this.campusSelected = true;
        this.getCollegeYearByCampusId();
        this.getCollegeYearToAddItem();
      } else {
        this.selectedCollegeYear = new CollegeYear(null, null, null);
        this.showMessage('error', 'Error !', 'This College is already attached to a campus in ' + this.selectedYear);
      }
    } else {
      this.showDialogCollegeBecomeCampus();
    }

  }

  getCollegeYearToAddItem(): void {
    this.collegesYearToAddItem = this.getCollegesItem();
    const arrayLength = this.collegesYearToAddItem.length;
    for (let i = arrayLength - 1 ; i >= 0 ; i-- ) {
      if ( this.collegesYearToAddItem[i].value.campus !== null ) {
        this.collegesYearToAddItem.splice(i, 1);
      }
    }
  }

  /** Function -> after dialog confirmation add a
   *  Campus from the selected college */
  makeCollegeToCampus(): void {
    const campusToAdd = new Campus(null);
    campusToAdd.campusCode = 'C' + this.selectedCollegeYear.college.collegeCode;
    campusToAdd.campusYear = this.selectedCollegeYear.year;
    campusToAdd.campusOff = false;
    campusToAdd.lmsCampusPassword = ''; // TODO A VOIR
    campusToAdd.lmsCourseName = 'SSR' + this.selectedCollegeYear.year;
    campusToAdd.lmsRole = 'quizuser';
    campusToAdd.lmsGroupName = 'GROUP ' + campusToAdd.campusCode + ' ' + campusToAdd.campusYear;
    this.campusService.postCampus(campusToAdd).subscribe(
      campus => {
        this.selectedCampus = campus;
        this.showMessage('success', 'Campus', 'Campus ' + campus.campusCode + ' created');
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
    this.displayDialogCollegeBecomeCampus = false;

  }

  /** Function -> clear selectedCollegeYear and hide the dialog */
  closeDialogCollegeBecomeCampus(): void {
    this.selectedCollegeYear = new CollegeYear(null, null, null);
    this.displayDialogCollegeBecomeCampus =  false;
  }

  /** Function -> show dialog to add a campus from a the selectedCollegeYear */
  showDialogCollegeBecomeCampus() {
    this.displayDialogCollegeBecomeCampus = true;
  }

  /** Function -> toggle the property tableEditable to allow edition in the collegeCampus table */
  toggleTableEditable(): void {
    this.tableEditable = !this.tableEditable;
  }

  /** Function -> show dialog to final submit confirmation */
  showDialogFinalSubmit() {
    this.displayDialogFinalSubmit = true;
  }

  /** Function -> store data in the database with status submited = 1 */
  finalSubmit(): void {
    // final submit
  }

  /** Function ->  hide the FinalSubmit dialog */
  closeDialogFinalSubmit(): void {
    this.displayDialogFinalSubmit =  false;
  }



  showMessage(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({severity: severity, summary: summary, detail: detail});
  }


  getCollegesItem(): SelectItem[] {
    const ret: SelectItem[] = [];
    for ( const college of this.colleges ) {
      ret.push(college);
    }
    return ret;
  }
}
