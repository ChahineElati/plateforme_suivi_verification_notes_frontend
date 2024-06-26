import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private auth : AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isLoggedIn()) {
      let tokenizedRequest = req.clone({
        setHeaders : {
          Authorization : 'Bearer ' + this.auth.getToken(),
        },
      });
      return next.handle(tokenizedRequest);
    }

    return next.handle(req);
  }
}