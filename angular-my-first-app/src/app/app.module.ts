import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule
  ],
  providers: [
    // HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
