//model representing customer entity
import { Address } from "./address";

export class Customer {
      constructor(
            public firstName: string,
            public lastName: string,
            public email: string,
            public phone: string,
            public gender: string,
            public address: Address,
            public id?: number,
      ) { }
}