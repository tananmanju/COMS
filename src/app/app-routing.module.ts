import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer-module/customer.component';
import { orderComponent } from './order-module/order.component';
import { componentFactoryName } from '@angular/compiler';
import { CustomerCardComponent } from './customer-module/customer-card/customer-card.component';
import { CustomerTableComponent } from './customer-module/customer-table/customer-table.component';
import { CustomerListComponent } from './customer-module/customer-list/customer-list.component';
const routes: Routes = [
  { path : '', redirectTo : '/customers' , pathMatch :'full'},
  { path : 'customers', 
    component: CustomerComponent,
    children: [
      { path : '',redirectTo :'./card-view' , pathMatch : 'full'},
      {path : 'card-view', component : CustomerCardComponent},
      {path : 'list-view', component : CustomerListComponent},
      {path : 'table-view', component : CustomerTableComponent}
    ]
  }, 
  { path : 'orders', component: orderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
