import { Component, OnInit } from '@angular/core';
import {Animal} from '../../domain/animal';
import {AnimalService} from '../../services/animal.service';

@Component({
  selector: 'app-animalcreate',
  templateUrl: './animalcreate.component.html',
  styleUrls: ['./animalcreate.component.css'],
})
export class AnimalcreateComponent implements OnInit {

  animal: Animal = new Animal();

  constructor(private animalService: AnimalService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    /* Set Image */

    this.animalService.createEntity(this.animal).subscribe();
  }
}
