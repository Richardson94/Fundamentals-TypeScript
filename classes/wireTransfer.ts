export class WireTransfer {
  private banckID:number;
  private banckName:string;
  private transactionNumber:number;
  constructor (banckID:number, banckName:string, transactionNumber:number) {
    this.banckID = banckID;
    this.banckName = banckName;
    this.transactionNumber = transactionNumber;
  }
}
