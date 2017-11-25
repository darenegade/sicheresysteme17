import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Animal } from '../domain/animal'
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message.service";
import {CRUDService} from "./crud.service";
import {Resource} from "./Resource";

@Injectable()

export class AnimalService extends CRUDService<Animal>{

  constructor(
    http: HttpClient,
    messageService: MessageService
  ) {
    super('/api/animals', http, messageService);
  }

  protected getEntitiesFromResource(resource:  Resource<Animal[]>): Animal[]{
    return resource._embedded.animals as Animal[];
  }

}
