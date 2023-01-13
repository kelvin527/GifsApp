import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from 'src/share/share.module';
import {HttpClientModule}   from '@angular/common/http'

import { AppComponent } from './app.component';
import { GifsModule } from '../gifs/gifs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShareModule,
    GifsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
