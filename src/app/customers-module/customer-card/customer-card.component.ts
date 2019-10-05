import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {Customer} from '../models/customer.model'

@Component({
  selector: 'customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})

export class CustomerCardComponent implements OnInit {

  title = 'Customer Card View ';
  customers: Customer[];

  constructor(private customerService:CustomerService) {
    console.log('Inside CustomerCardComponent constructor!!');
  }

  ngOnInit() {
    console.log('Inside CustomerCardComponent  ngOnInit!!');
    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

}

