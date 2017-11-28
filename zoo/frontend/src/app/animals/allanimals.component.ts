import { Component, OnInit } from '@angular/core';
import {AnimalService} from "../services/animal.service";
import {Animal} from "../domain/animal";

@Component({
  selector: 'app-allanimals',
  templateUrl: './allanimals.component.html',
  styleUrls: ['./allanimals.component.css']
})
export class AllanimalsComponent implements OnInit {

  private animals: Animal[];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.getEntities().subscribe(animals => this.animals = animals );
  }
}
