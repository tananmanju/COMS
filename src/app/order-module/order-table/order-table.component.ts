import { Component, OnInit } from "@angular/core";
import { Order } from "../models/order";
import { OrderService } from "../services/order-service";

@Component({
  selector: "order-table",
  templateUrl: "./order-table.component.html",
  styleUrls: ["./order-table.component.scss"]
})
export class OrderTableComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrderService) {
    console.log("Inside OrderTableComponent constructor !!");
  }
  ngOnInit() {
    console.log("Inside OrderTableComponent!!");
    this.orderService.getorders().subscribe(orders => {
      this.orders = orders;
    });
  }
}
