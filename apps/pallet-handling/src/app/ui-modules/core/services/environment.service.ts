import { Injectable } from '@angular/core';
import { EnvironmentConfigKeys } from '../models/environment';
import { environment } from 'apps/pallet-handling/src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EnvironmentService implements EnvironmentConfigKeys {
  // Environment configuration keys for TFS
  public apiUrl = environment.apiUrl;
  public env = environment.env;
  public authUrl = environment.authUrl;
  // Add more environment variables that should be overwritten on release
  public authLoginUrl = 'users/authenticate';
  public loginPageURL = '/login';
  public persistUser = true;

  public setConfigValues(environmentConfigKeys: EnvironmentConfigKeys): void {
    this.apiUrl = environmentConfigKeys.apiUrl;
    this.authUrl = environmentConfigKeys.authUrl;
    this.env = environmentConfigKeys.env;
  }
}
