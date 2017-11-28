import { Injectable } from '@angular/core';
import {CRUDService} from "./crud.service";
import {Enclosure} from "../domain/enclosure";
import {EnclosuresResource} from "./resources/enclosures.resource";
import {Resource} from "./resources/Resource";
import {MessageService} from "../message.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AnimalsResource} from "./resources/animals.resource";
import {Animal} from "../domain/animal";

@Injectable()
export class EnclosureService extends CRUDService<Enclosure, EnclosuresResource>{

  constructor(
    http: HttpClient,
    messageService: MessageService
  ) {
    super('/api/enclosures', http, messageService);
  }

  protected getEntitiesFromResource(resource:  Resource<EnclosuresResource>): Enclosure[]{
    return resource._embedded.enclosures;
  }

  getAnimals(id: number): Observable<Animal[]> {
    return this.http.get<Resource<AnimalsResource>>(`${this.baseUrl}/${id}/animals`)
      .map(resource => resource._embedded.animals);
  }

}
