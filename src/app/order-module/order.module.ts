import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderService } from "./services/order-service";
import { OrderTableComponent } from "./order-table/order-table.component";

@NgModule({
  declarations: [OrderTableComponent],
  imports: [CommonModule],
  providers: [OrderService],
  exports: [OrderTableComponent]
})
export class OrderModule {}
