import { TokenManager } from '../../utils/token-manager';
import { Injectable } from '@angular/core';
import {AbstractService} from '../abstract/abstract.service';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ServiceOption} from '../../utils/service-option';
import {CollegeYear} from '../../model/CollegeYear';
import {Campus} from '../../model/Campus';

@Injectable()
export class CampusService extends AbstractService {

  private baseObject = 'campus';

  constructor(protected http: Http, protected tokenManager: TokenManager) {
    super(http, tokenManager);
  }

  getCampus(param: Map<string, string>): Observable<Campus[]> {

    const serviceOption = new ServiceOption(this.baseObject, param);
    return this.get(serviceOption);

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

  postCampus(campus: Campus): Observable<Campus> {
   return this.post(campus, new ServiceOption(this.baseObject, null));
    // Pareil qu au dessus en cas de pb
  }

  putCampus(campus: Campus):  Observable<Campus> {
    return this.update(campus, new ServiceOption(this.baseObject, null));
  }

}
