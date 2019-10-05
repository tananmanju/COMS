import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  title:string = "Customer Data in list Format";
  customers:Customer[];

  constructor(private customerService:CustomerService) { 
    console.log('Inside CustomerListComponent constructor!!');

  }

  ngOnInit() {
    console.log('Inside CustomerListComponent!!');
    this.customerService.getCustomers().subscribe(customers=>
      {
        this.customers = customers;
       
      })
  }

}
