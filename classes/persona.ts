export class Persona{

    Name:String;
    LastName:String;
    Age:Number;

    constructor(Name:String, LastName:String, Age:Number){
        this.Name = Name;
        this.LastName = LastName;
        this.Age = Age;
    }
    getEdad(){
        return this.Age;
    }

}