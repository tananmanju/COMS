import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CustomerComponent } from "./customer-module/customer.component";
import { OrderTableComponent } from "./order-module/order-table/order-table.component";
import { componentFactoryName } from "@angular/compiler";
import { CustomerCardComponent } from "./customer-module/customer-card/customer-card.component";
import { CustomerTableComponent } from "./customer-module/customer-table/customer-table.component";
import { CustomerListComponent } from "./customer-module/customer-list/customer-list.component";
import { UnderMaintanceComponent } from "./under-maintance/under-maintance.component";
import { NewCustomerFormComponent } from './customer-module/new-customer/new-customer-form.component';
import { CustomerOrderComponent } from './customer-module/customer-order/customer-order.component';

const ROUTES: Routes = [
  { path: "", redirectTo: "customers", pathMatch: "full" },
  {
    path: "customers",
    component: CustomerComponent,
    children: [
      { path: "", redirectTo: "card-view", pathMatch: "full" },
      { path: "card-view", component: CustomerCardComponent },
      { path: "list-view", component: CustomerListComponent },
      { path: "table-view", component: CustomerTableComponent },
      { path: "new-customer", component: NewCustomerFormComponent }
    ]
  },
  {
    path: "orders", component: OrderTableComponent
  },
  {
    path: "order",
    children: [
      { path: ":customerId", component: CustomerOrderComponent }
    ]
  },
  { path: "login", component: UnderMaintanceComponent },
  { path: "about", component: UnderMaintanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
