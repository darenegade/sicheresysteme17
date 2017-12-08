import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnimalComponent } from './animals/animal.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { MatListModule} from '@angular/material/list';
import { AnimalService} from './services/animal.service';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule, MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { AllanimalsComponent } from './animals/allanimals/allanimals.component';
import { EnclosureComponent } from './enclosures/enclosure.component';
import { KeeperComponent } from './keepers/keeper.component';
import {EnclosureService} from './services/enclosure.service';
import {KeeperService} from './services/keeper.service';
import {AllenclosuresComponent} from './enclosures/allenclosures/allenclosures.component';
import {AllkeepersComponent} from './keepers/allkeepers/allkeepers.component';
import {MatIconModule} from '@angular/material/icon';
import { AnimalcreateComponent } from './animals/animalcreate/animalcreate.component';
import {EnclosurecreateComponent} from './enclosures/enclosurecreate/enclosurecreate.component';
import {KeepercreateComponent} from './keepers/keepercreate/keepercreate.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    EnclosureComponent,
    KeeperComponent,
    AllanimalsComponent,
    AllenclosuresComponent,
    AllkeepersComponent,
    EnclosureComponent,
    KeeperComponent,
    AnimalcreateComponent,
    EnclosurecreateComponent,
    KeepercreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    AnimalService,
    EnclosureService,
    KeeperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
