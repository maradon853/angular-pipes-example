import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PhonenumberPipe } from './phonenumber.pipe';
import { MerlinPipe } from './merlin.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhonenumberPipe,
    MerlinPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
