import { Component, OnInit } from '@angular/core';
import {Animal} from "../../domain/animal";
import {CropperSettings} from 'ng2-img-cropper';
import {AnimalService} from "../../services/animal.service";

@Component({
  selector: 'app-animalcreate',
  templateUrl: './animalcreate.component.html',
  styleUrls: ['./animalcreate.component.css'],
})
export class AnimalcreateComponent implements OnInit {

  animal: Animal = new Animal();

  data: any;
  cropperSettings: CropperSettings;

  constructor(private animalService: AnimalService) {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 50;
    this.cropperSettings.height = 50;
    this.cropperSettings.croppedWidth = 500;
    this.cropperSettings.croppedHeight = 500;
    this.cropperSettings.canvasWidth = 400;
    this.cropperSettings.canvasHeight = 400;

    this.data = {};
  }

  ngOnInit() {
  }

  onSubmit() {
    this.animal.profileimg = this.data.image;

    this.animalService.createEntity(this.animal).subscribe();
  }
}
