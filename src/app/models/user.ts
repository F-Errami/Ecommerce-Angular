export class User {
    id: number;
    username: string;
    country: string;
    birthdate: string;
    email: string;
    phone: string;
  
    constructor(id: number, username: string, country: string, birthdate: string, email: string, phone: string) {
      this.id = id;
      this.username = username;
      this.country = country;
      this.birthdate = birthdate;
      this.email = email;
      this.phone = phone;
    }
  }
  