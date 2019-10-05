import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {
  title:string = "Customer Data in Table Format";
  customers:Customer[];

  constructor(private customerService:CustomerService) { 
    console.log('Inside CustomerTableComponent constructor!!');

  }

  ngOnInit() {
    console.log('Inside CustomerTableComponent!!');
    this.customerService.getCustomers().subscribe(customers=>
      {
        this.customers = customers;
       
      })
  }

}
