export class OrderDetail {
  private productID:number;
  public description:string;
  public amount:number;
  constructor (productID:number, description:string, amount:number) {
    this.productID = productID;
    this.description = description;
    this.amount = amount;
  }
}
