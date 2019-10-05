import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
//user define
import { CustomerCardComponent } from "./customers-module/customer-card/customer-card.component";
import { CustomerTableComponent } from './customers-module/customer-table/customer-table.component';
import { CustomersModule } from "./customers-module/customer.module";
import { AppRoutingModule } from './app-routing.module';
import { CustomerHeaderComponent } from './customers-module/customer-header/customer-header.component';
//import { CustomerListComponent } from './customers-module/customer-list/customer-list.component';



@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [CustomerTableComponent, CustomerHeaderComponent, CustomerCardComponent]
})
export class AppModule { }
