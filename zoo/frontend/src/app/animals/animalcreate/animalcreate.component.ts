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
  private fileReader: FileReader = new FileReader();

  constructor(private animalService: AnimalService) {
  }

  ngOnInit() {
    this.fileReader.onload = (e : any) => {
      this.animal.profileimg = e.target.result;
    };
  }

  onSubmit() {
    this.animalService.createEntity(this.animal).subscribe();
    this.animal = new Animal();
  }

  imageChanged(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.fileReader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
