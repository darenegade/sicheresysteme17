import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Base} from '../domain/base';
import {Observable} from 'rxjs/Observable';
import {Resource} from './resources/Resource';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/shareReplay';

export abstract class CRUDService<T extends Base, F> {

  constructor(protected baseUrl: string,
              protected http: HttpClient,) {

  }

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  protected abstract getEntitiesFromResource(resource: Resource<F>): T[];

  getEntities(): Observable<T> {
    return this.http.get<Resource<F>>(this.baseUrl)
      .map(resource => this.getEntitiesFromResource(resource))
      .flatMap((entity) => entity, 1);
  }


  getEntity(id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }


  createEntity(entity: T): Observable<T> {
    return this.http
      .post<T>(this.baseUrl, JSON.stringify(entity), {headers: this.headers});
  }

  updateEntity(entity: T): Observable<T> {
    return this.http
      .post<T>(`${this.baseUrl}/${entity.id}`, JSON.stringify(entity), {headers: this.headers});
  }

  deleteEntity(entity: T): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${entity.id}`, {headers: this.headers});
  }
}
