import { Component, OnInit } from '@angular/core';
import {Enclosure} from '../../domain/enclosure';
import {EnclosureService} from '../../services/enclosure.service';

@Component({
  selector: 'app-allenclosures',
  templateUrl: './allenclosures.component.html',
  styleUrls: ['./allenclosures.component.css']
})
export class AllenclosuresComponent implements OnInit {

  public enclosures: Enclosure[];

  constructor(private enclosureService: EnclosureService) { }

  ngOnInit() {
    this.enclosureService.getEntities().subscribe(enclosures => this.enclosures = enclosures );
  }
}
