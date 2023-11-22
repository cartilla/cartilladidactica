import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CartillainitComponent } from './cartillainit/cartillainit.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './home/nav/nav.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    AppComponent,
    CartillainitComponent,
    NavComponent,

  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        SlickCarouselModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
