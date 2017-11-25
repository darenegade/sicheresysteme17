import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {MessageService} from "../message.service";
import {Base} from "../domain/base";
import {Observable} from "rxjs/Observable";
import {Resource} from "./Resource";
import 'rxjs/Rx';

@Injectable()

export abstract class CRUDService<T extends Base> {

  constructor(
    private baseUrl: string,
    private http: HttpClient,
    protected messageService: MessageService
  ) {

  }

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  protected abstract getEntitiesFromResource(resource:  Resource<T[]>): T[];

  getEntities(): Observable<T[]> {
    return this.http.get<Resource<T[]>>(this.baseUrl)
      .map(resource => this.getEntitiesFromResource(resource));
  }


  getEntity(id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }


  createEntity(entity: T): Observable<T> {
    return this.http
      .post<T>(this.baseUrl, JSON.stringify(entity), { headers: this.headers });
  }

  updateEntity(entity: T): Observable<T> {
    return this.http
      .post<T>(`${this.baseUrl}/${entity.id}`, JSON.stringify(entity), { headers: this.headers })
  }

  deleteEntity(entity: T): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${entity.id}`, { headers: this.headers });
  }

  /** Log a Service message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
