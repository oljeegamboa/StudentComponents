import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { AddEntryComponent } from './entry/add-entry/add-entry.component';
import { ListEntryComponent } from './entry/add-entry/list-entry/list-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AddEntryComponent,
    ListEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
