import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userType } from "../context/useContext";
import { AntDesign, Entypo, Feather, MaterialIcons,FontAwesome5 } from "@expo/vector-icons";
import { IAddressProps } from "../types/dataType";
interface StepsData {
  title: string;
  content: string;
}

const ConfirmationScreen = () => {
  const steps: StepsData[] = [
    { title: "Address", content: "Address Form" },
    { title: "Delivery", content: "Delivery Options" },
    { title: "Payment", content: "Payment Details" },
    { title: "Place Order", content: "Order Summary" },
  ];
  const [selectedAddress, setSelectedAddress] = useState("");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [addresses, setAddresses] = useState<IAddressProps[]>([]);
  const { setUserId, userId } = useContext(userType);


const fetchAddresses = async () => {
    try {
      const res = await axios.get(`/address/${userId}`);
      const { addresses } = res.data;
      setAddresses(addresses);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchAddresses();
  }, []);

  
  return (
    <ScrollView style={{ marginTop: 55 }}>
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 40 }}>
        <View style={styles.stepView}>
          {steps.map((step, index) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {index > 0 && (
                <View
                  style={[
                    { flex: 1, height: 2, backgroundColor: "green" },
                    index <= currentStep && { backgroundColor: "green" },
                  ]}
                />
              )}
              <View style={styles.indexView}>
                {index < currentStep ? (
                  <Text style={styles.indexText}>&#1003</Text>
                ) : (
                  <Text style={styles.indexText}>{index + 1}</Text>
                )}
              </View>
              <Text style={{ textAlign: "center", marginTop: 80 }}>
                {step.title}
              </Text>
            </View>
          ))}
        </View>
        {currentStep === 0 && (
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Select Delivery Address
            </Text>
            <Pressable>
              {addresses?.map((address, index) => (
                <Pressable style={styles.pressable}>
                  {selectedAddress && selectedAddress._id === address?._id ? (
                  <FontAwesome5 name="dot-circle" size={20} color="#008397" />
                ) : (
                  <Entypo
                    onPress={() => setSelectedAddress(address)}
                    name="circle"
                    size={20}
                    color="gray"
                  />
                )}



                  <View style={{ marginLeft: 6 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {address?.name}
                      </Text>
                      <Entypo name="location-pin" size={24} color="red" />
                    </View>

                    <Text style={styles.address}>
                      {address?.houseNo}, {address?.landmark}
                    </Text>

                    <Text style={styles.address}>{address?.street}</Text>

                    <Text style={styles.address}>Lagos, Nigeria</Text>

                    <Text style={styles.address}>
                      phone No : {address?.mobileNo}
                    </Text>
                    <Text style={styles.address}>
                      pin code : {address?.postalCode}
                    </Text>

                    <View style={styles.pressableView}>
                      <Pressable style={styles.edit}>
                        <Text>Edit</Text>
                      </Pressable>

                      <Pressable style={styles.remove}>
                        <Text>Remove</Text>
                      </Pressable>

                      <Pressable style={styles.default}>
                        <Text>Set as Default</Text>
                      </Pressable>
                    </View>
                  </View>
                  
                </Pressable>
              ))}
            </Pressable>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  stepView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  pressableView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 7,
  },
  pressable: {
    borderWidth: 1,
    borderColor: "#D0D0D0",
    paddingBottom: 17,
    padding: 10,
    gap: 5,
    marginVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
  },
  indexView: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ccc",
    justifyContent: "center",
  },
  indexText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    fontSize: 15,
    color: "#181818",
  },
  edit: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 0.9,
    borderColor: "#D0D0D0",
  },
  remove: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 0.9,
    borderColor: "#D0D0D0",
  },
  default: {
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 0.9,
    borderColor: "#D0D0D0",
  },
});
