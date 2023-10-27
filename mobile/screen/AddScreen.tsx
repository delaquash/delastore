import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Pressable,
    Alert,
  } from "react-native";
  import React, { useEffect, useState,useContext } from "react";
  import { AddressProps } from "../types/dataType";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import jwt_decode from "jwt-decode"
  import axios from "axios";
  import { userType } from "../context/useContext";
  import { useNavigation } from "@react-navigation/native";

  interface DecodedToken {
    userId: string;
    // Add other properties from your decoded token if necessary
  }

  const AddressScreen = () => {
    const {userId, setUserId} =useContext(userType)
    const navigation = useNavigation();
    const [address, setAddress] = useState<AddressProps>({
        name: "",
        mobileNo: "",
        houseNo: "",
        street: "",
        landmark: "",
        postalCode: ""
      });


      useEffect(() => {
        const fetchUser = async () => {
          try {
            const token: string | null = await AsyncStorage.getItem('authToken');
    
            if (token) {
              const decodedToken: DecodedToken = jwt_decode(token);
              const userId: string = decodedToken.userId;
              setUserId(userId);
            }
          } catch (error) {
            // Handle errors, e.g., AsyncStorage or decoding errors
            console.error('Error fetching user:', error);
          }
        };
    
        fetchUser();
      }, []);
    
      const handleChange = (property: string, value: string) => {
        setAddress({
          ...address,
          [property]: value,
        });
      };

      const handleAddAddress = () => {
        axios.post("http://localhost:8000/address", { userId, address })
          .then((response) => {
            Alert.alert("Success", "Address added successfully");
            setAddress({
              name: "",
              mobileNo: "",
              houseNo: "",
              street: "",
              landmark: "",
              postalCode: ""
            });
      
            setTimeout(() => {
              navigation.goBack();
            }, 500);
          })
          .catch((error) => {
            Alert.alert("Error", "Failed to add address");
            console.log("error", error);
          });
      };

  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ height: 50, backgroundColor: "#00CED1" }} />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Add a new Address
        </Text>

        <TextInput
          placeholderTextColor={"black"}
          placeholder="India"
          style={{
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
        />

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Full name (First and last name)
          </Text>

          <TextInput
            value={address.name}
            onChangeText={(text) => handleChange("name", text)}
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="enter your name"
          />
        </View>

        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Mobile numebr
          </Text>

          <TextInput
            value={address.mobileNo}
            onChangeText={(text) => handleChange('mobileNo', text)}
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Mobile No"
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Flat,House No,Building,Company
          </Text>

          <TextInput
            value={address.houseNo}
            onChangeText={(text) => handleChange('houseNo', text)}
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder=""
          />
        </View>

        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Area,Street,sector,village
          </Text>
          <TextInput
            value={address.street}
            onChangeText={(text) => handleChange('street', text)}
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder=""
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Landmark</Text>
          <TextInput
            value={address.landmark}
            onChangeText={(text) => handleChange('landmark', text)}
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Eg near appollo hospital"
          />
        </View>

        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Pincode</Text>

          <TextInput
            value={address.postalCode}
            onChangeText={(text) => handleChange('postalCode', text)}
            placeholderTextColor={"black"}
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Pincode"
          />
        </View>

        <Pressable
        // onPress={handleAddAddress}
          style={{
            backgroundColor: "#FFC72C",
            padding: 19,
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Add Address</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});