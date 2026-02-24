export class Product {
    id: number;
    code:string;
    name:string;
    price: number;
    quantity:number;
    image?:string;
    constructor(id:number, code:string, name:string,price:number, quantity:number,image:string){
       this.id=id;
       this.code=code;
       this.name=name;
       this.price=price
       this.quantity=quantity;
    }

}

