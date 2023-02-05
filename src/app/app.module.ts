import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShoppingCardsComponent } from './components/shopping-cards/shopping-cards.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCardsComponent,
    HeaderComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
