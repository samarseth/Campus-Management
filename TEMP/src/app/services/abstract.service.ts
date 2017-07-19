import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class AbstractService {
  private token;
  private devlopMode;
  private apiUrl;
  constructor(private http: Http,
              public storage: Storage) {


    this.apiUrl = 'https://localhost:8080/';


    // this.headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiQ2hyaXN0aWFuIiwibGFzdG5hbWUiOiJLb2NrZSIsInBhc3N3b3JkIjoiJDJhJDEwJFBGQzNXeFNrVkRaRlhzcC9ka05aSi4yRGpScnlpVGhreXYzSW5yZVVLRXZ6cDZhZUdhQzFpIiwiZW1haWwiOiJjaHJpc3RpYW4ua29ja2VAZ21haWwuY29tIiwib25lc2lnbmFsSWQiOjEyMzE1LCJleHBpcmVzIjoxNDkwMTk0NDA4MTU4LCJhY2NvdW50RXhwaXJlZCI6ZmFsc2UsImFjY291bnRMb2NrZWQiOmZhbHNlLCJjcmVkZW50aWFsc0V4cGlyZWQiOmZhbHNlLCJhY2NvdW50RW5hYmxlZCI6dHJ1ZSwiYXV0aG9yaXRpZXMiOlt7ImlkIjozLCJuYW1lIjoiRURJVE9SIn0seyJpZCI6MiwibmFtZSI6IkFETUlOIn0seyJpZCI6MSwibmFtZSI6IlVTRVIifV0sImdyb3VwcyI6W3siaWQiOjEsInN1Ymdyb3VwIjowLCJuYW1lIjoiQ1BFIn0seyJpZCI6NCwic3ViZ3JvdXAiOjAsIm5hbWUiOiJBbm7DqWUgMSJ9XX0.5qh7a1zsMmM4F3CGJ9Zo5my6mUL9Ds03mzpClOpf-kc');


  }


  /**
   * Methode used to get the object
   * @param serviceOption {'object':'routeName'} eg: http://api/student then  serviceOption = {'object':'student'}
   */
  get(serviceOption: any): Observable<any> {

    const options = this.createOptions();

    return this.http.get(this.apiUrl + serviceOption.object , options)
      .map((res: Response) => this.extractData(res))
      .catch(err => this.handleError(err));
  }

  /**
   * Methode used to post an object
   * @param data the data to post
   * @param serviceOption target of the request {'object':'routeName'} eg: http://api/student then  serviceOption = {'object':'student'}
   */
  post(data: any, serviceOption: any): Observable<any> {

    const body = JSON.stringify(data);
    const options = this.createOptions();

    return this.http.post(this.apiUrl + serviceOption.object, body, options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  /**
   * Methode used to update an object
   * @param data object to update with new data
   * @param serviceOptions target of the request {'object':'routeName'} eg: http://api/student then  serviceOption = {'object':'student'}
   */
  update(data: any, serviceOptions: any) {

    const body = JSON.stringify(data);
    const options = this.createOptions();

    return this.http.put(this.apiUrl + serviceOptions.object, body, options)
      .map(this.extractData)
      .catch(this.handleError);
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

  setToken(token) {
    this.token = token;
  }


  private createOptions(): RequestOptions {
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({ 'Content-Type': 'application/json' });
    if (this.token && this.token.length > 10) {
      headers.append('Authorization', 'Bearer ' + this.token);
    }

    return new RequestOptions({ headers: headers });;
  }


  private extractData(res: any) {

    if (res._body) {
      res.body = JSON.parse(res._body);
    }

    return res;
  }

  private handleError(error: any) {
    return Observable.throw(error); // Throw exeption with errMsg messages
  }

}
