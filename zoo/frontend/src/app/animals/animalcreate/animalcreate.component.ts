import {Component, Inject, OnInit} from '@angular/core';
import {Animal} from '../../domain/animal';
import {AnimalService} from '../../services/animal.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-animalcreate',
  templateUrl: './animalcreate.component.html',
  styleUrls: ['./animalcreate.component.css'],
})
export class AnimalcreateComponent implements OnInit {

  animal: Animal = new Animal();
  private fileReader: FileReader = new FileReader();

  constructor(public dialogRef: MatDialogRef<AnimalcreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private animalService: AnimalService) {
  }

  ngOnInit() {
    this.fileReader.onload = (e: any) => {
      this.animal.profileimg = e.target.result;
    };
  }

  onSave() {
    this.animalService.createEntity(this.animal).subscribe(animal => this.dialogRef.close(animal));
  }

  imageChanged(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.fileReader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
