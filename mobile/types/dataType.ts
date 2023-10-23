 export interface listDataProps  {
    id: string;
    image: string;
    name: string;
}

export interface dealProps {
    id: string;
    title: string;
    oldPrice: number;
    price: number;
    image: string;
    carouselImages: string[];
    color: string;
    size: string;
}

export interface offerProps extends dealProps {
    offer: string;
}

export interface IAddressProps {
    name: string;
    houseNo: number;
    landmark: string;
    street: string;
    mobileNo?: number;
    postalCode?: string;
  }

// export interface offerProps{}