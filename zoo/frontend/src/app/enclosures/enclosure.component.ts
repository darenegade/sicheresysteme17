import {Component, Input, OnInit} from '@angular/core';
import {Enclosure} from "../domain/enclosure";

@Component({
  selector: 'app-enclosure',
  templateUrl: './enclosure.component.html',
  styleUrls: ['./enclosure.component.css']
})
export class EnclosureComponent implements OnInit {

  @Input() enclosure: Enclosure;

  constructor() { }

  ngOnInit() {
  }

}
