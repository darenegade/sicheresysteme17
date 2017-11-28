import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { AnimalComponent } from './animals/animal.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import {MatListModule} from '@angular/material/list';
import {AnimalService} from "./services/animal.service";
import {MatCardModule} from "@angular/material";

import { AllanimalsComponent } from './animals/allanimals.component';
import { EnclosureComponent } from './enclosures/enclosure.component';
import { KeeperComponent } from './keepers/keeper.component';
import {EnclosureService} from "./services/enclosure.service";
import {KeeperService} from "./services/keeper.service";
import {AllenclosuresComponent} from "./enclosures/allenclosures.component";
import {AllkeepersComponent} from "./keepers/allkeepers.component";


@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    EnclosureComponent,
    KeeperComponent,
    MessagesComponent,
    AllanimalsComponent,
    AllenclosuresComponent,
    AllkeepersComponent,
    EnclosureComponent,
    KeeperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatCardModule
  ],
  providers: [
    AnimalService,
    EnclosureService,
    KeeperService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
