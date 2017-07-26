import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {TokenManager} from '../../utils/token-manager';
import {AbstractService} from '../abstract/abstract.service';
import {College} from '../../model/College';
import {Observable} from 'rxjs/Observable';
import {ServiceOption} from '../../utils/service-option';

@Injectable()
export class CollegeService extends AbstractService {

  private baseObject = 'college';

  constructor(protected http: Http, protected tokenManager: TokenManager) {
    super(http, tokenManager);
  }

  getCollegesAreCampusInYear(year: number): Observable<College[]> {
    const param: Map<string, string> = new Map();
    param.set('isCampus', year.toString());
    const serviceOption = new ServiceOption(this.baseObject, param);
    return this.get(serviceOption);
  }
}
