import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
//user define
import { CustomerModule } from "./customer-module/customer.module";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
//import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "./app-routing.module";
//to be later added in order modulre
import { orderComponent } from './order-module/order.component';

@NgModule({
  declarations: [AppComponent,HeaderComponent,orderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CustomerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
