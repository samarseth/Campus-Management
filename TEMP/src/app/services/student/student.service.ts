import { ServiceOption } from '../../utils/service-option';
import { TokenManager } from '../../utils/token-manager';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AbstractService } from '../abstract/abstract.service';
import { Observable } from 'rxjs/Observable';
import { Student } from '../../model/Student';
import {CollegeYear} from '../../model/CollegeYear';
import {StudentDetails} from '../../model/student-details';

@Injectable()
export class StudentService extends AbstractService {

  constructor(protected http: Http, protected tokenManager: TokenManager) {
    super(http, tokenManager);
  }


  public getStudentBytoken(param: Map<string, string>): Observable<Student[]> {
    const serviceOption = new ServiceOption('studentBasic/token', new Map());
    return this.get(serviceOption);
  }

  public getStudentByCollegeYear(collegeYear: CollegeYear): Observable<StudentDetails[]> {
    const param: Map<string, string> = new Map();
    param.set('collegeYearId', collegeYear.id.toString());
    const serviceOption = new ServiceOption('studentDetails', param);
    return this.get(serviceOption);
  }

  public saveStudents(data: Student[]): Observable<Student[]> {
    const serviceOption = new ServiceOption('studentBasic/save', new Map());
    return this.post(data, serviceOption);
  }


  public deleteStudentById(id: number): Observable<any> {
    return this.delete(id, 'studentBasic');
  }

}
