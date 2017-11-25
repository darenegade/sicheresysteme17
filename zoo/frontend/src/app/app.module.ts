import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import {MatListModule} from '@angular/material/list';
import {AnimalService} from "./services/animal.service";
import {MatCardModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    MessagesComponent
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
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
