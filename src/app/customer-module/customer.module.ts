import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerCardItemComponent } from './customer-card/customer-card-item/customer-card-item.component';
import { CustomerService } from './services/customer.service';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';

//import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    CustomerCardComponent,
    CustomerCardItemComponent,
    CustomerTableComponent,
    CustomerHeaderComponent,
    
    //CustomerListComponent
  ],
  imports:[CommonModule],
  providers: [CustomerService],
  exports: [
    CustomerCardComponent,
    CustomerTableComponent,
    CustomerHeaderComponent,
    //CustomerListComponent
  ]
})
export class CustomerModule {

}
