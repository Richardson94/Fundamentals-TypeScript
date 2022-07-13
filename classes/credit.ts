export class Credit {
  private clientNumber:number;
  private type:string;
  private expirationDate:string;
  constructor (clienteNumber:number, type:string, expirationDate:string) {
    this.clientNumber = clienteNumber;
    this.type = type;
    this.expirationDate = expirationDate;
  }
}
