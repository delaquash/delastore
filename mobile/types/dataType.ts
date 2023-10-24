 export interface listDataProps  {
    id: string;
    image: string;
    name: string;
}

//   const {userId,setUserId} = useContext(UserType)
//   useEffect(() => {
//     const fetchUser = async() => {
//         const token = await AsyncStorage.getItem("authToken");
//         const decodedToken = jwt_decode(token);
//         const userId = decodedToken.userId;
//         setUserId(userId)
//     }

//     fetchUser();
//   },[]);
//   console.log(userId)
//   const handleAddAddress = () => {
//       const address = {
//           name,
//           mobileNo,
//           houseNo,
//           street,
//           landmark,
//           postalCode
//       }

//       axios.post("http://localhost:8000/addresses",{userId,address}).then((response) => {
//           Alert.alert("Success","Addresses added successfully");
//           setName("");
//           setMobileNo("");
//           setHouseNo("");
//           setStreet("");
//           setLandmark("");
//           setPostalCode("");

//           setTimeout(() => {
//             navigation.goBack();
//           },500)
//       }).catch((error) => {
//           Alert.alert("Error","Failed to add address")
//           console.log("error",error)
//       })
//   }

export interface AddressProps {
    name: string;
    mobileNo: string;
    houseNo: string;
    street: string;
    landmark: string;
    postalCode: string;
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