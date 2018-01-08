import {Component, OnInit} from '@angular/core';
import {AnimalService} from '../../services/animal.service';
import {Animal} from '../../domain/animal';
import {AnimalcreateComponent} from '../animalcreate/animalcreate.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-allanimals',
  templateUrl: './allanimals.component.html',
  styleUrls: ['./allanimals.component.css']
})
export class AllanimalsComponent implements OnInit {

  public animals: Animal[] = [];

  constructor(public dialog: MatDialog,
              private animalService: AnimalService) {
  }

  ngOnInit() {
    this.animalService.getEntities().subscribe(animal => this.animals.push(animal));
  }

  openDialog() {
    let dialogRef = this.dialog.open(AnimalcreateComponent, {
      width: '800px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null)
        this.animals.push(result);
    });
  }
}
