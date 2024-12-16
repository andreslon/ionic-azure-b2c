import { Injectable } from '@angular/core';
import { PublicClientApplication } from '@azure/msal-browser';
import { b2cConfig } from './b2c-config';

@Injectable({
  providedIn: 'root',
})
export class MsalInstanceService {
  private instance: PublicClientApplication;

  constructor() {
    this.instance = new PublicClientApplication(b2cConfig);
  }

  getMsalInstance(): PublicClientApplication {
    return this.instance;
  }
}
