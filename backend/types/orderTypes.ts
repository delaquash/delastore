export interface OrderProps{
    user: String;
    products: product[]
    totalPrice: Number;
    shippingAddress: shippingDetails
}

export interface product {
    name: String;
    quantity: Number;
    price: Number;
    image: String;
}

export interface shippingDetails {
    name: String;
    mobileNo: Number;
    houseNo: String;
    street: String;
    landmark: String;
    postalCode: String
}