import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllenclosuresComponent} from "./enclosures/allenclosures.component";

const routes: Routes = [
  { path: '', component: AllenclosuresComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
