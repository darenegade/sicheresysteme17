import { Component, OnInit } from '@angular/core';
import {Keeper} from '../../domain/keeper';
import {KeeperService} from '../../services/keeper.service';

@Component({
  selector: 'app-keepercreate',
  templateUrl: './keepercreate.component.html',
  styleUrls: ['./keepercreate.component.css'],
})
export class KeepercreateComponent implements OnInit {

  keeper: Keeper = new Keeper();
  private fileReader: FileReader = new FileReader();

  constructor(private keeperService: KeeperService) {
  }

  ngOnInit() {
    this.fileReader.onload = (e : any) => {
      this.keeper.profileimg = e.target.result;
    };
  }

  onSubmit() {
    this.keeperService.createEntity(this.keeper).subscribe();
    this.keeper = new Keeper();
  }

  imageChanged(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.fileReader.readAsDataURL(fileInput.target.files[0]);
    }
  }
}
