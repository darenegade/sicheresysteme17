import {Component, Inject, OnInit} from '@angular/core';
import {Keeper} from '../../domain/keeper';
import {KeeperService} from '../../services/keeper.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-keepercreate',
  templateUrl: './keepercreate.component.html',
  styleUrls: ['./keepercreate.component.css'],
})
export class KeepercreateComponent implements OnInit {

  keeper: Keeper = new Keeper();
  private fileReader: FileReader = new FileReader();

  constructor(public dialogRef: MatDialogRef<KeepercreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private keeperService: KeeperService) {
  }

  ngOnInit() {
    this.fileReader.onload = (e: any) => {
      this.keeper.profileimg = e.target.result;
    };
  }

  onSave() {
    this.keeperService.createEntity(this.keeper).subscribe(keeper => this.dialogRef.close(keeper));
  }

  imageChanged(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.fileReader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
