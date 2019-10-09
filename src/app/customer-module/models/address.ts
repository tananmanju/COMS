//model representing customer address
export class Address {
  constructor(
    public houseNo: string,
    public street: string,
    public society: string,
    public city: string,
    public state: string,
    public country: string
  ) { }
}