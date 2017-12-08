import { Component, OnInit } from '@angular/core';
import {Enclosure} from '../../domain/enclosure';
import {EnclosureService} from '../../services/enclosure.service';

@Component({
  selector: 'app-enclosurecreate',
  templateUrl: './enclosurecreate.component.html',
  styleUrls: ['./enclosurecreate.component.css'],
})
export class EnclosurecreateComponent implements OnInit {

  enclosure: Enclosure = new Enclosure();

  constructor(private enclosureService: EnclosureService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.enclosureService.createEntity(this.enclosure).subscribe();
    this.enclosure = new Enclosure();
  }

}
