import {Component, OnInit} from '@angular/core';
import {Enclosure} from '../../domain/enclosure';
import {EnclosureService} from '../../services/enclosure.service';
import {MatDialog} from '@angular/material';
import {EnclosurecreateComponent} from '../enclosurecreate/enclosurecreate.component';

@Component({
  selector: 'app-allenclosures',
  templateUrl: './allenclosures.component.html',
  styleUrls: ['./allenclosures.component.css']
})
export class AllenclosuresComponent implements OnInit {

  public enclosures: Enclosure[] = [];

  constructor(public dialog: MatDialog,
              private enclosureService: EnclosureService) {
  }

  ngOnInit() {
    this.enclosureService.getEntities().subscribe(enclosure => this.enclosures.push(enclosure));
  }

  openDialog() {
    let dialogRef = this.dialog.open(EnclosurecreateComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null)
        this.enclosures.push(result);
    });
  }
}
