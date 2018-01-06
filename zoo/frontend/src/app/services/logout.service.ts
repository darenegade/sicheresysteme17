import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/shareReplay';
import {Injectable} from '@angular/core';

@Injectable()
export class LogoutService {

  constructor(protected http: HttpClient) {
  }

  logout(): Observable<Object> {
    return this.http
      .post<Object>('/logout', {});
  }

}
