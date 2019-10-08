//model representing customer address
export class Address {
  constructor(
    public houseNumber: string,
    public street: string,
    public society: string,
    public city: string,
    public state: string,
    public country: string
  ) {}
}
