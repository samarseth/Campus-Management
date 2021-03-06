import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {ServiceUtilsService} from "../../utils/services/service-utils/service-utils.service";
// import {ServiceUtilsService} from '../../utils/services/service-utils/service-utils.service';


@Component({
  selector: 'app-campus-colleges',
  templateUrl: './campus-colleges.component.html',
  styleUrls: ['./campus-colleges.component.css']
})

export class CampusCollegesComponent implements OnInit {
  yearSelectItem: SelectItem[];
  selectedYear: string;

  campuses: SelectItem[];
  selectedCampus: string;

  campusArray: CampusCollegesModel[] = [];

  constructor(private serviceUtils: ServiceUtilsService) {
    this.yearSelectItem = [];
    this.yearSelectItem = this.serviceUtils.getYearSelectItems();

    this.campuses = [];
    this.campuses.push({label: 'University of Delhi Campus 1', value: 1});
    this.campuses.push({label: 'University of Delhi Campus 2', value: 2 });
    this.campuses.push({label: 'University of Delhi Campus 3',  value: 3});
    this.campuses.push({label: 'University of Delhi Campus 4',  value: 4});
    this.campuses.push({label: 'University of Delhi Campus 5', value: 5});
  }

  ngOnInit() {
    this.campusArray.push({college_name: 'Sample College 1', tpo_details: 'TPO Detail_1',  total_students: '94',
      link_clicked: 'Yes', total_applied: '100', total_aptitude: '101', total_technical: '102',
      overall_passed:  '10', status: 'In Consideration' })

    this.campusArray.push({college_name: 'Sample College 2', tpo_details: 'TPO Detail_2',  total_students: '95',
      link_clicked: 'Yes', total_applied: '100', total_aptitude: '101', total_technical: '102',
      overall_passed:  '10', status: 'In Consideration' })

    this.campusArray.push({college_name: 'Sample College 3', tpo_details: 'TPO Detail_3',  total_students: '92',
      link_clicked: 'Yes', total_applied: '100', total_aptitude: '101', total_technical: '102',
      overall_passed:  '10', status: 'In Consideration' })

    this.campusArray.push({college_name: 'Sample College 4', tpo_details: 'TPO Detail_4',  total_students: '54',
      link_clicked: 'Yes', total_applied: '100', total_aptitude: '101', total_technical: '102',
      overall_passed:  '10', status: 'In Consideration' })

    this.campusArray.push({college_name: 'Sample College 5', tpo_details: 'TPO Detail_5',  total_students: '56',
      link_clicked: 'Yes', total_applied: '100', total_aptitude: '101', total_technical: '102',
      overall_passed:  '10', status: 'In Consideration' })
  }

}

export class CampusCollegesModel {
  college_name: string;
  tpo_details: string;
  total_students: string;
  link_clicked: string;
  total_applied: string;
  total_aptitude: string;
  total_technical: string;
  overall_passed: string;
  status: string;
};
