/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CoreInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    req = req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });

    return this.handleErrors(req, next);
  }

  private handleErrors(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req || req).pipe(
      catchError((err: HttpErrorResponse) => {
        const error: { message?: string; title?: string } = {
          title: err.statusText,
        };
        console.log(err);
        error.message = '';
        if (err.error) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          error.message = err.error.message || err.error.Message;
          error.title = err.error.Message ? '[Apriso Error]' : '[Server Error]';
        }
        return throwError(err);
      })
    );
  }
}
