import { NgModule } from '@angular/core';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerCardItemComponent } from './customer-card/customer-card-item/customer-card-item.component';
import { CommonModule } from '@angular/common';
import { CustomerService } from './services/customer.service';
import { CustomerTableComponent } from './customer-table/customer-table.component';

@NgModule({
    declarations:[CustomerCardComponent,CustomerCardItemComponent, CustomerTableComponent],
    imports:[CommonModule],
    providers:[CustomerService],
    exports: [CustomerCardComponent,CustomerCardItemComponent]
})

export class CustomersModule{

}