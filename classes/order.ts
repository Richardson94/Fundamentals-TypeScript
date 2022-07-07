export class Order {
  private orderID:number;
  private orderDetailID:number;
  protected createDate:string;
  constructor (orderID:number, orderDetailID:number, createDate:string) {
    this.orderID = orderID;
    this.orderDetailID = orderDetailID;
    this.createDate = createDate;
  }
}
