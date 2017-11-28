import { Injectable } from '@angular/core';
import {CRUDService} from "./crud.service";
import {Enclosure} from "../domain/enclosure";
import {EnclosuresResource} from "./resources/enclosures.resource";
import {Resource} from "./resources/Resource";
import {MessageService} from "../message.service";
import {HttpClient} from "@angular/common/http";

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

}
