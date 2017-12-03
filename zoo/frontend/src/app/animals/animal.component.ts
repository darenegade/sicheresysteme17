import {Component, Input, OnInit} from '@angular/core';
import {Animal} from '../domain/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  @Input() animal: Animal;

  constructor() { }

  ngOnInit() {
  }

}
