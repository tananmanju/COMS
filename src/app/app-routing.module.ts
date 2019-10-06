import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer-module/customer.component';
import { OrderTableComponent } from './order-module/order-table/order-table.component';
import { componentFactoryName } from '@angular/compiler';
import { CustomerCardComponent } from './customer-module/customer-card/customer-card.component';
import { CustomerTableComponent } from './customer-module/customer-table/customer-table.component';
import { CustomerListComponent } from './customer-module/customer-list/customer-list.component';
import { UnderMaintanceComponent } from './under-maintance/under-maintance.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  {
    path: 'customers',
    component: CustomerComponent,
    children: [
      { path: '', redirectTo: 'card-view', pathMatch: 'full' },
      { path: 'card-view', component: CustomerCardComponent },
      { path: 'list-view', component: CustomerListComponent },
      { path: 'table-view', component: CustomerTableComponent }
    ]
  },
  { path: 'orders', component: OrderTableComponent },
  { path: 'login', component: UnderMaintanceComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
