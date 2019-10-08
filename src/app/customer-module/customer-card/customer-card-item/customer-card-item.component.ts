import { Component, Input } from "@angular/core";

@Component({
  selector: "customer-card-item",
  templateUrl: "./customer-card-item.component.html",
  styleUrls: ["./customer-card-item.component.scss"]
})
export class CustomerCardItemComponent {
  @Input() private customer;

  constructor() {}
}
