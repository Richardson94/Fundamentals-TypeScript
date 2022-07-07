export class Customer {
  private customerID:number;
  private name:string;
  private address:string;
  private phoneNumber:number;
  constructor (customerID:number, name:string, address:string, phoneNumber:number) {
    this.customerID = customerID;
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }
}
