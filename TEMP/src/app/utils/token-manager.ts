import { Injectable } from '@angular/core';

@Injectable()
export class TokenManager {

    private token: string;

    constructor() {
        this.token = null;
     }

    public setToken(token: string) {this.token = token; }
    public getToken() {return this.token; }
}
