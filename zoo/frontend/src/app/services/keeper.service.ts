import {Injectable} from '@angular/core';
import {Keeper} from '../domain/keeper';
import {KeepersResource} from './resources/keepers.resource';
import {Resource} from './resources/Resource';
import {HttpClient} from '@angular/common/http';
import {CRUDService} from './crud.service';

@Injectable()
export class KeeperService extends CRUDService<Keeper, KeepersResource> {

  constructor(http: HttpClient) {
    super('/api/keepers', http);
  }

  protected getEntitiesFromResource(resource: Resource<KeepersResource>): Keeper[] {
    return resource._embedded.keepers;
  }

}
