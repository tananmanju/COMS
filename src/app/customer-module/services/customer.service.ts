import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Customer } from '../models/customer';


@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) {

    }

    getCustomers() {
        return this.http.get<Customer[]>(environment.customerApi)
    }

    postCustomer(customer:Customer[]){
        return this.http.post<Customer[]>(environment.customerApi,customer);
    }
}

