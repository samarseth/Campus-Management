import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { College } from '../model/College';
import { AbstractService } from './abstract.service';
import { CollegeYear } from '../model/CollegeYear';

@Injectable()
export class CollegeYearService extends AbstractService {

  private readCollegesURL = 'http://localhost:8080/college';  // URL to web API
  private baseObject = {'object': '/collegeYear'};


  getCollegeYear(): Observable<CollegeYear[]> {
    return this.get(this.baseObject);

    // If you have to make specific traitement !!!!
    // return this.get({'object': 'college_year'})
    //               .map((data) => {
    //                 console.log(data);
    //                 return data;
    //               }, (error) => {
    //                 console.log(error);
    //                 return error
    //               })

  }


  postCollegeYear(college: College): Observable<CollegeYear> {
    return this.post(college, this.baseObject);

    //Pareil qu au dessus en cas de pb 
  }





}
