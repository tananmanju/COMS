//model representing customer address
export class Address {
  constructor(
    private houseNumber: string,
    private street: string,
    private society: string,
    private city: string,
    private country: string
  ) {}
}
