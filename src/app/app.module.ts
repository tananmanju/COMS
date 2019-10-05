import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
//user define
import { CustomerModule } from "./customer-module/customer.module";
//import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
//import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CustomerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
