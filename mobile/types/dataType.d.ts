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

interface offerProps extends dealProps {
    offer: string;
}

export interface offerProps{}