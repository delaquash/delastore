import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

let token;

const getToken = async() => {
   const token = await AsyncStorage.getItem("token")
   if(!token){
    return null;
   }
   return token;
}
   
token = getToken();
let headers;
if(token){
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Preload",
        common: {
            Authorization: `Bearer ${token}`
        } 
    }
} else {
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, Preload",
    }
}

const api = axios.create({
    baseURL: "http://localhost:5000",
    headers,  // base url
})

export default api;