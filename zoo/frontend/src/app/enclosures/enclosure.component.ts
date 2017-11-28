import {Component, Input, OnInit} from '@angular/core';
import {Enclosure} from "../domain/enclosure";
import {EnclosureService} from "../services/enclosure.service";

@Component({
  selector: 'app-enclosure',
  templateUrl: './enclosure.component.html',
  styleUrls: ['./enclosure.component.css']
})
export class EnclosureComponent implements OnInit {

  @Input() enclosure: Enclosure;

  @Input() vacancy: number;

  constructor(private enclosureService: EnclosureService) { }

  ngOnInit() {
    this.enclosureService.getAnimals(this.enclosure.id).subscribe(animals => this.vacancy = animals.length)
  }

  count(size: number): Array<Object> {
    return new Array(size);
  }

}
