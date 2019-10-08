import { Component, OnInit } from "@angular/core";
import { CustomerService } from '../services/customer.service';
import { ActivatedRoute, provideRoutes } from '@angular/router';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';


@Component({
  selector: "customer-order",
  templateUrl: "./customer-order.component.html",
  styleUrls: ["./customer-order.component.scss"]
})
export class CustomerOrderComponent implements OnInit{
  customerOrders:any;
  param1: string;

  constructor(private customerService :CustomerService,private route: ActivatedRoute) {
    console.log("Inside CustomerOrderComponent constructor !!");
  }
  ngOnInit(){
    this.param1 = this.route.snapshot.params.customerId;
    console.log(this.param1);
    this.customerService.getCustomersOrders(this.param1).subscribe((orders:any) => {
      this.customerOrders = orders.map(order=>{
        let total = 0;
        for(let pro of order.products){
          total += pro.orderPrice;
        }
        order.total = total;
        return order;
      });
      console.log(orders);
     });
  }
  

}
