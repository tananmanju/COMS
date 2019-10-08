//model representing customer entity
import { Address } from "./address";

export class Customer {
  constructor(
    private id: number,
    private firstName: string,
    private lastName: string,
    private email: string,
    private phone: number,
    private address: Address
  ) {}
}
