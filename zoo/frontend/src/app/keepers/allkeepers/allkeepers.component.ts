import {Component, OnInit} from '@angular/core';
import {Keeper} from '../../domain/keeper';
import {KeeperService} from '../../services/keeper.service';
import {MatDialog} from '@angular/material';
import {KeepercreateComponent} from '../keepercreate/keepercreate.component';

@Component({
  selector: 'app-allkeepers',
  templateUrl: './allkeepers.component.html',
  styleUrls: ['./allkeepers.component.css']
})
export class AllkeepersComponent implements OnInit {

  public keepers: Keeper[] = [];

  constructor(public dialog: MatDialog,
              private keeperService: KeeperService) {
  }

  ngOnInit() {
    this.keeperService.getEntities().subscribe(keeper => this.keepers.push(keeper));
  }

  openDialog() {
    let dialogRef = this.dialog.open(KeepercreateComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null)
        this.keepers.push(result);
    });
  }
}
