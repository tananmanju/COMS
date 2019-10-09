import { Component, Input } from "@angular/core";
import { Route, Router } from '@angular/router';

@Component({
        selector: "customer-card-item",
        templateUrl: "./customer-card-item.component.html",
        styleUrls: ["./customer-card-item.component.scss"]
})
export class CustomerCardItemComponent {
        @Input() private customer;

        constructor(private router: Router) { }

        goToOrders() {
                this.router.navigate(['order', this.customer.id]);
        }
}