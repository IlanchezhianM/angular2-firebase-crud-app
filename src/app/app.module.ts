import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAkrGjBqXHI71FztRVZDti7gwYSEDZvWwA",
  authDomain: "fir-crud-6d67e.firebaseapp.com",
  databaseURL: "https://fir-crud-6d67e.firebaseio.com",
  storageBucket: "fir-crud-6d67e.appspot.com",
  messagingSenderId: "185942809970"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
