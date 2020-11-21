import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from "@angular/http";
import {ApiModule} from "./api/api.module"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './main/main.component';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    HttpModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule ,
    MatIconModule,
    MatDialogModule

  ],
  entryComponents: [DialogComponent],
  providers: [ApiModule],
  bootstrap: [AppComponent,]
})
export class AppModule { }
