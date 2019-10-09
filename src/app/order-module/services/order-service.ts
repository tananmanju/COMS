import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { observable, Observable, of } from 'rxjs';
import { environment } from "../../../environments/environment";
import { Order } from "../models/order";

@Injectable()
export class OrderService {


  BASE_API_URL = 'http://localhost:5000/api';

  CUSTOMER_API_URL = `${this.BASE_API_URL}/customers`;
  ORDER_API_URL = `${this.BASE_API_URL}/orders`;
  ORDER_ID_API_URL = `${this.BASE_API_URL}/orders/orderId`;
  ORDER_PAID_STATUS_API_URL = `${this.BASE_API_URL}/orders/payStatus/paid`;
  ORDER_UNPAID_STATUS_API_URL = `${this.BASE_API_URL}/orders/payStatus/unpaid`;
  ORDER_PENDING_STATUS_API_URL = `${this.BASE_API_URL}/orders/payStatus/pending`;
  ORDER_FULFILL_STATUS_API_URL = `${this.BASE_API_URL}/orders/fulfillStatus/true`;
  ORDER_UNFULFILL_STATUS_API_URL = `${this.BASE_API_URL}/orders/fulfillStatus/false`;
  constructor(private http: HttpClient) { }
  // Get all order details
  getorders() {
    return this.http.get<Order[]>(environment.baseApi + 'orders');
  }

  //read customers data by making calls to REST API
  fetchAllList(): Observable<Order[]> {
    console.log("Inside fetchAllList fetchOrderData!!");
    return this.http.get<Order[]>(this.ORDER_API_URL);
  }

  fetchPaidList(): Observable<Order[]> {
    console.log("Inside fetchPaidList fetchOrderData!!");
    return this.http.get<Order[]>(this.ORDER_PAID_STATUS_API_URL);
  }

  fetchUnpaidList(): Observable<Order[]> {
    console.log("Inside fetchUnpaidList fetchOrderData!!");
    return this.http.get<Order[]>(this.ORDER_UNPAID_STATUS_API_URL);
  }

  fetchPendingList(): Observable<Order[]> {
    console.log("Inside fetchPendingList fetchOrderData!!");
    return this.http.get<Order[]>(this.ORDER_PENDING_STATUS_API_URL);
  }

  fetchFulfillList(): Observable<Order[]> {
    console.log("Inside fetchFulfillList fetchOrderData!!");
    return this.http.get<Order[]>(this.ORDER_FULFILL_STATUS_API_URL);
  }

  fetchUnfulfillList(): Observable<Order[]> {
    console.log("Inside fetchUnfulfillList fetchOrderData!!");
    return this.http.get<Order[]>(this.ORDER_UNFULFILL_STATUS_API_URL);
  }
}
