import {Component,OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Component({
	selector: 'app',
	templateUrl:'./customer-card.component.html',
	styleUrls:['./customer-card.component.scss']

})

export class CustomerCardComponent implements OnInit {

	title = 'Customer Card View ';
	customerAPI = 'http://localhost:5000/api/customers';
	customers:Customer[];

	constructor(private http:HttpClient) {
		console.log("Inside SampleComponent constructor!!");
	}

	ngOnInit() {
		console.log("Inside SampleComponent  ngOnInit!!");
		//obervable returning customer array
		this.http.get<Customer[]>(this.customerAPI)
		.subscribe((res)=>{
			this.customers = res;
		});
	}

}


//model representing customer entity
class Customer {
	constructor(
		private id:number,
		private firstName:string,
		private lastName:string,
		private email:string,
		private phone:number,
		private address:Address
	){}
}

//model representing customer address
class Address {
	constructor(
		private houseNumber:string,
		private street:string,
		private society:string,
	    private city:string,
	    private country:string
	){}
}
