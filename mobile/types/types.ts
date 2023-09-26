export type loginProps = {
    email: string;
    password: string
  }

  export type ItemProps = {
    label: string;
    value: string;
  }

  export interface product {
    image: string;
    title: string;
    price: number;
    rating: {
      rate: number;
      count: number
    }
  }

  export interface Product{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }