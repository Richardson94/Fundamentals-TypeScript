export class Item {
  public material:string;
  public weight:string;
  public size:number;
  public color:string;
  constructor (material:string, weight:string, size:number, color:string) {
    this.material = material;
    this.weight = weight;
    this.size = size;
    this.color = color;
  }
}
