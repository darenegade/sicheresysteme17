import { Component, OnInit } from '@angular/core';
import {AnimalService} from "../services/animal.service";
import {Animal} from "../domain/animal";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  private animals: Animal[];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.getEntities().subscribe(animals => this.animals = animals);
  }

}
