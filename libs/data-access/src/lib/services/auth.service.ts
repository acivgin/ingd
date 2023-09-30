import { Injectable } from '@angular/core';
import { ConversionUtils } from '@ingd/util';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public getFormattedDate(date: Date): string {
    return ConversionUtils.formatDate(date);
  }
}
