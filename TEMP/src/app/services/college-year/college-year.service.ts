import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { TokenManager } from '../../utils/token-manager';
import { College } from '../../model/College';
import { AbstractService } from '../abstract/abstract.service';
import { CollegeYear } from '../../model/CollegeYear';
import { ServiceOption } from '../../utils/service-option';

@Injectable()
export class CollegeYearService extends AbstractService {

  private baseObject = 'collegeYear';

  constructor(protected http: Http, protected tokenManager: TokenManager) {
    super(http, tokenManager);
  }

  getCollegesYear(param: Map<string, string>): Observable<CollegeYear[]> {

    const serviceOption = new ServiceOption(this.baseObject, param);
    return this.get(serviceOption);
  }

  getCollegeByToken(): Observable<CollegeYear> {
    return this.get(new ServiceOption(this.baseObject + '/current', new Map));
  }


  getCollegeById(id: string): Observable<College> {
    return this.get(new ServiceOption('college/' + id, new Map))
  }



  postCollegeYear(collegeYear: CollegeYear): Observable<CollegeYear> {
    return this.post(collegeYear, new ServiceOption(this.baseObject, null));
    // Pareil qu au dessus en cas de pb
  }

  putCollegeYear(collegeYear: CollegeYear):  Observable<CollegeYear> {
    return this.update(collegeYear, new ServiceOption(this.baseObject, null));
  }

  putCollegesYear(collegesYear: CollegeYear[]):  Observable<CollegeYear> {
    return this.update(collegesYear, new ServiceOption(this.baseObject + '/save', null));
  }


  submitCollegeYear(): Observable<any> {
    return this.post({}, new ServiceOption('collegeYear/submit', new Map))
  }

}
