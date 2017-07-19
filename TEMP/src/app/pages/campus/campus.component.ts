import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {College} from '../../model/College';
import {Campus} from '../../model/Campus';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

  /** Dropdown to select year of the campus */
  year: SelectItem[];
  /** Colleges list which can be selected in campus dropdown list */
  colleges: SelectItem[];
  /** College which is selected by the top dropdown list */
  selectedCollege: College;
  /** Campus which is created by the selectedCollege */
  selectedCampus: Campus;
  /** Colleges list which is associated with the selected campus */
  campusColleges: College[];
  /** College which has been selected with the bottom dropdown list
   *  in order to add this college to the selected campus college list */
  selectedCollegeToAdd: College;
  /** Property which allow data table edition */
  tableEditable: boolean;
  /** Property which show the dialog to create Campus from the selectedCollege */
  displayDialogCollegeBecomeCampus: boolean;
  /** Property which show the dialog to confirm final submit */
  displayDialogFinalSubmit: boolean;
  /** Property to disabled the college adding button */
  addCollegeButton: boolean;
  /** Property to know if a year is selected */
  yearSelected: boolean;
  /** Property to know if a campus is selected */
  campusSelected: boolean;


  constructor() {      // testing
    this.year = [];
    this.campusColleges = [];
    this.colleges = [];

    this.tableEditable = false;
    this.displayDialogCollegeBecomeCampus = false;
    this.displayDialogFinalSubmit = false;
    this.addCollegeButton = true;
    this.yearSelected = false;
    this.campusSelected = false;

    this.selectedCollegeToAdd = new College();
    this.selectedCollege = new College();
    this.selectedCampus = new Campus();

    this.year.push({label: '2010', value: '2010'});
    this.year.push({label: '2011', value: '2011'});
    this.year.push({label: '2012', value: '2012'});
    this.year.push({label: '2013', value: '2013'});

    this.colleges.push({label: 'College number1', value: {name: 'College 1', code: 'QQBCDS', tpo_name: 'Luc', tpo_email_address: 'onwet@esjgoij.com', tpo_mobile_number: '0617904818'}});
    this.colleges.push({label: 'College number', value: {name: 'College number', code: 'AGERHH', tpo_name: 'Luc', tpo_email_address: 'onwet@esjgoij.com', tpo_mobile_number: '0617904818'}});
    this.colleges.push({label: 'College number12', value: {name: 'College number12', code: 'DFHADR', tpo_name: 'Luc', tpo_email_address: 'onwet@esjgoij.com', tpo_mobile_number: '0617904818'}});
    this.colleges.push({label: 'College number13', value: {name: 'College number13', code: 'FGE4RY', tpo_name: 'Luc', tpo_email_address: 'onwet@esjgoij.com', tpo_mobile_number: '0617904818'}});
    this.campusColleges.push({name: 'College 1', code: 'QQBCDS', tpo_name: 'Luc', tpo_email_address: 'onwet@esjgoij.com', tpo_mobile_number: '0617904818'});
    this.campusColleges.push({name: 'College 2', code: 'SFDSGD', tpo_name: 'Claude', tpo_email_address: 'onwet@esjgoij.com', tpo_mobile_number: '0617904818'});
  }

  ngOnInit() {
  }

  /** Function -> Add selectedCollegeToAdd to campusColleges List */
  addToCampusColleges(): void {
    console.log(this.selectedCollegeToAdd);
    this.campusColleges.push(this.selectedCollegeToAdd);
  }

  /** Function -> Delete this row college from campusColleges List */
  deleteCollege(index: number): void {
    this.campusColleges.splice(index, 1);
  }

  /** Function -> check if the selectedCollege is a Campus or not.
   * If it is, it will be the selectedCampus
   * else open the dialog */
  checkCollegeIsCampus(): void {
    // check if the college is a campus
    // yes
    // return l'object campus en base et mettre dans selectedCampus
    this.selectedCampus = {campus_code: 'CQUEJFS', campus_date: new Date(), lms_group_name: 'HHAW' };
    this.campusSelected = true;
    // sinon
    // open dialog dialog
      this.showDialogCollegeBecomeCampus();
  }

  /** Function -> after dialog confirmation add a
   *  Campus from the selected college */
  makeCollegeToCampus(): void {
    // Appeler la fonction du service correspondant
    this.displayDialogCollegeBecomeCampus = false;
  }

  /** Function -> clear selectedCollege and hide the dialog */
  closeDialogCollegeBecomeCampus(): void {
    this.selectedCollege = new College();
    this.displayDialogCollegeBecomeCampus =  false;
  }

  /** Function -> show dialog to add a campus from a the selectedCollege */
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

}
