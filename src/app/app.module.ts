import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
//user define
import { CustomerModule } from "./customer-module/customer.module";
import { HeaderComponent } from "./header/header.component";
import { AppComponent } from "./app.component";
import { UnderMaintanceComponent } from "./under-maintance/under-maintance.component";
import { FooterComponent } from "./footer/footer.component";
import { AppRoutingModule } from "./app-routing.module";
//To be later added in order modulre
import { OrderModule } from "./order-module/order.module";

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    UnderMaintanceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CustomerModule,
    OrderModule
  ],
  providers: [
    { provide: "TeamName", useValue: { teamName: "Semantic Warriors" } }
  ],
  bootstrap: [HeaderComponent, AppComponent, FooterComponent]
})
export class AppModule {}
