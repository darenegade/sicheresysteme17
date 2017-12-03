import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Animal } from '../domain/animal'
import {HttpClient} from "@angular/common/http";
import {CRUDService} from "./crud.service";
import {Resource} from "./resources/Resource";
import {AnimalsResource} from "./resources/animals.resource";

@Injectable()

export class AnimalService extends CRUDService<Animal, AnimalsResource>{

  constructor(
    http: HttpClient
  ) {
    super('/api/animals', http);
  }

  protected getEntitiesFromResource(resource:  Resource<AnimalsResource>): Animal[]{
    return resource._embedded.animals;
  }

}
