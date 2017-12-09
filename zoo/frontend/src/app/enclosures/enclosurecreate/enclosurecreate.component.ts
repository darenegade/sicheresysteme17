import {Component, Inject, OnInit} from '@angular/core';
import {Enclosure} from '../../domain/enclosure';
import {EnclosureService} from '../../services/enclosure.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-enclosurecreate',
  templateUrl: './enclosurecreate.component.html',
  styleUrls: ['./enclosurecreate.component.css'],
})
export class EnclosurecreateComponent implements OnInit {

  enclosure: Enclosure = new Enclosure();

  constructor(
    public dialogRef: MatDialogRef<EnclosurecreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private enclosureService: EnclosureService) {
  }

  ngOnInit() {
  }

  onSave() {
    this.enclosureService.createEntity(this.enclosure).subscribe(enclosure => this.dialogRef.close(enclosure));
  }
}
