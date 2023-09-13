export interface IUserProps {
    name: string;
    email: string;
    password: string;
    verified: boolean;
    verifiedToken: string;
    addresses: addressProps[];
    order: string[];
    createdAt: Date
  }
  
  export interface addressProps {
    name: string;
    mobile: number;
    houseNo: string;
    street: string;
    landmark: string;
    city: string;
    country: string;
    postalCode: string
  }




