// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  // tslint:disable-next-line:variable-name
  private _idToken: string;
  // tslint:disable-next-line:variable-name
  private _accessToken: string;
  // tslint:disable-next-line:variable-name
  private _expiresAt: number;

  auth0 = new auth0.WebAuth({
    clientID: '3vvPHqcLboE1uIYV8letz18iKVcw32Ak',
    domain: 'ommalor.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/home',
    scope: 'openid'
  });

  constructor(public router: Router) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }

}
