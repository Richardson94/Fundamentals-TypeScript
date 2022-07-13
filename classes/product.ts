export class Product {
  private productID:number;
  public name:string;
  public description:string;
  public price:number;
  public stockQuantily:number;
  public expirationDate:string;
  constructor (productID:number, name:string, description:string, price:number, stockQuantily:number, expirationDate:string) {
    this.productID = productID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stockQuantily = stockQuantily;
    this.expirationDate = expirationDate;
  }
}
