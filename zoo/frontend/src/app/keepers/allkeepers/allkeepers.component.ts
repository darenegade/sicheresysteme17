import { Component, OnInit } from '@angular/core';
import {Keeper} from '../../domain/keeper';
import {KeeperService} from '../../services/keeper.service';

@Component({
  selector: 'app-allkeepers',
  templateUrl: './allkeepers.component.html',
  styleUrls: ['./allkeepers.component.css']
})
export class AllkeepersComponent implements OnInit {

  public keepers: Keeper[];

  constructor(private keeperService: KeeperService) { }

  ngOnInit() {
    this.keeperService.getEntities().subscribe(keepers => this.keepers = keepers );
  }
}
