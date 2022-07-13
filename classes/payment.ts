export class Payment {
  private paymentID:number;
  protected amount:number;
  protected taxesNit:number;
  protected taxesName:string;
  public description:string;
  constructor (paymentID:number, amount:number, taxesNit:number, taxesName:string, description:string) {
    this.paymentID = paymentID;
    this.amount = amount;
    this.taxesNit = taxesNit;
    this.taxesName = taxesName;
    this.description = description;
  }
}
