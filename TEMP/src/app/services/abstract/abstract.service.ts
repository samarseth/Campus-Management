import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ServiceOption } from '../../utils/service-option';
import { TokenManager } from '../../utils/token-manager';



@Injectable()
export class AbstractService {
  private token;
  private devlopMode;
  private apiUrl;
  constructor(protected http: Http, protected tokenManager: TokenManager) {

    this.apiUrl = 'http://10.135.155.213:8080/api/';
  }


  /**
   * Methode used to get the object
   * @param serviceOption {'object':'routeName'} eg: http://api/student then  serviceOption = {'object':'student'}
   */
  get<T>(serviceOption: ServiceOption): Observable<T> {
    const options = this.createOptions();
    let rootParameter = '';


    if (serviceOption.param.size > 0) {
      serviceOption.param.forEach((value: string, name: string) => {
        rootParameter += '/' + name + '/' + value;
      });
    }

    return this.http.get(this.apiUrl + serviceOption.object + rootParameter, options)
      .map((res: any) => <T>this.extractData(res))
      .catch(err => this.handleError(err));
  }

  /**
   * Methode used to post an object
   * @param data the data to post
   * @param serviceOption target of the request {'object':'routeName'} eg: http://api/student then  serviceOption = {'object':'student'}
   */
  post<T>(data: any, serviceOption: ServiceOption): Observable<T> {

    const body = JSON.stringify(data);
    const options = this.createOptions();

    return this.http.post(this.apiUrl + serviceOption.object, body, options)
      .map((res: any) => <T>this.extractData(res))
      .catch(err => this.handleError(err));
  }

  /**
   * Methode used to update an object
   * @param data object to update with new data
   * @param serviceOptions target of the request {'object':'routeName'} eg: http://api/student then  serviceOption = {'object':'student'}
   */
  update<T>(data: any, serviceOptions: ServiceOption): Observable<T>  {

    const body = JSON.stringify(data);
    const options = this.createOptions();

    return this.http.put(this.apiUrl + serviceOptions.object, body, options)
      .map((res: any) => this.extractData(res))
      .catch(err => this.handleError(err));
  }

  /**
   * Methode used to delete an object on a specific route
   * @param id of the object to delete
   * @param route target to delete
   */
  delete(id: number, route: string): Observable<any> {
    const options = this.createOptions();

    return this.http.delete(this.apiUrl + route + '/' + id, options)
      .map((res: any) => this.extractData(res))
      .catch(err => this.handleError(err));
  }



  private createOptions(): RequestOptions {
    this.token = this.tokenManager.getToken();
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({ 'Content-Type': 'application/json' });
    if (this.token && this.token.length > 10) {
      headers.append('Authorization', 'Bearer ' + this.token);
    }

    return new RequestOptions({ headers: headers });
  }


  private extractData(res: any) {

    // if (res._body) {
    //   res.body = JSON.parse(res._body);
    // }
    //
    // return res;

    return res.json()
  }

  private handleError(error: any) {
    return Observable.throw(error); // Throw exeption with errMsg messages
  }

}
