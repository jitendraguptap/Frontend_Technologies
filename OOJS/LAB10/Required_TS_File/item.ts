import {IdGenerator} from "./idgenerator";
 export class item{
    itemId : number
    price : number
    descripion : string
    constructor(_price:number , _description: string ){
        this.price = _price;
        this.descripion= _description;
        this.itemId = IdGenerator.getitemId(); // Initialize itemId using IdGenerator
    }
     getitemId(): number {
        return IdGenerator.itemid++;
    }

    getprice() : number{
      return this.price;
    }
    getdescription() : string {
        return this.descripion;
    }

}