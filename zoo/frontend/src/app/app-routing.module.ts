import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllenclosuresComponent} from './enclosures/allenclosures/allenclosures.component';
import {AllanimalsComponent} from './animals/allanimals/allanimals.component';
import {AllkeepersComponent} from './keepers/allkeepers/allkeepers.component';

const routes: Routes = [
  { path: 'enclosures', component: AllenclosuresComponent },
  { path: 'animals', component: AllanimalsComponent },
  { path: 'keepers', component: AllkeepersComponent },
  { path: '',   redirectTo: '/animals', pathMatch: 'full' },
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
