import {Component, Input, OnInit} from '@angular/core';
import {Keeper} from "../domain/keeper";

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css']
})
export class KeeperComponent implements OnInit {

  @Input() keeper: Keeper;

  constructor() { }

  ngOnInit() {
  }

}
