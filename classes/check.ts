export class Check {
  private checkName:string;
  private banckID:number;
  private authorizer:string;
  constructor (checkName:string, banckID:number, authorizer:string) {
    this.checkName = checkName;
    this.banckID = banckID;
    this.authorizer = authorizer;
  }
}
