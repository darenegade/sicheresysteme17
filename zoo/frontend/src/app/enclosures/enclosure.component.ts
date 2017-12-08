import {Component, Input, OnInit} from '@angular/core';
import {Enclosure} from '../domain/enclosure';
import {EnclosureService} from '../services/enclosure.service';
import {Animal} from '../domain/animal';

@Component({
  selector: 'app-enclosure',
  templateUrl: './enclosure.component.html',
  styleUrls: ['./enclosure.component.css']
})
export class EnclosureComponent implements OnInit {

  @Input() enclosure: Enclosure;

  @Input() animals: Animal[];

  constructor(private enclosureService: EnclosureService) {
  }

  ngOnInit() {
    this.enclosureService.getAnimals(this.enclosure.id).subscribe(animals => this.animals = animals);
  }

  reserved(): number {
    if (this.animals == null || this.animals.length == 0) {
      return 0;
    }
    return this.animals
      .map(animal => animal.size)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
      .valueOf();
  }

  count(size: number): Array<Object> {
    return new Array(size);
  }

}
