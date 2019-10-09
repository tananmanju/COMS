import { Component, OnInit } from "@angular/core";
import { Order } from "../models/order";
import { OrderService } from "../services/order-service";

@Component({
      selector: "order-table",
      templateUrl: "./order-table.component.html",
      styleUrls: ["./order-table.component.scss"],
      providers: [OrderService]
})
export class OrderTableComponent implements OnInit {
      orders: Order[];
      title:string = "Orders";
            fulfill_Status: boolean = true;
            path: string = 'assets/images/';



      constructor(private orderService: OrderService) {
           console.log("Inside OrderTableComponent constructor !!");
      }
      
      ngOnInit() {
            this.orderService.getorders().subscribe(orders => {
              this.orders = orders;
            });
            
      }
            allList(): void {
            this.orderService.fetchAllList().subscribe((res) => {
                this.orders = res;
            });
          }

            paidList(){
                  console.log('click')
                  this.orderService.fetchPaidList().subscribe((res) => {
                  this.orders = res;
                  });
            }

            unpaidList(){
                  this.orderService.fetchUnpaidList().subscribe((res) => {
                  this.orders = res;
                  });
            }

            pendingList(){
                  this.orderService.fetchPendingList().subscribe((res) => {
                  this.orders = res;
                  });
            }

            fulfillList(){
                  this.orderService.fetchFulfillList().subscribe((res) => {
                  this.orders = res;
                  });
            }

            unfulfillList(){
                  this.orderService.fetchUnfulfillList().subscribe((res) => {
                  this.orders = res;
                  });
            }
}





