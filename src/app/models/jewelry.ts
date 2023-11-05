export class Jewelry {
    id: number;
    name: string;
    price: number;
    description: string;
    creator: string;
    type: string;

   

  
    constructor(id: number, name: string,creator: string,type: string, price: number ,description: string) {
      this.id = id;
      this.name = name;
      this.price= price
      this.description = description;
      this.creator = creator;
      this.type = type;
   
   
    }
  }
  