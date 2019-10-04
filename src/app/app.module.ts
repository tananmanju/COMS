import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
//user define
import {CustomerCardComponent} from "./customers/customer-card/customer-card.component";
import {CustomersModule} from "./customers/customer.module";
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [CustomerCardComponent]
})
export class AppModule { }
