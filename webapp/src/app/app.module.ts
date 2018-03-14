import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ElasticSearchService } from './elasticsearch.service';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    ElasticSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
