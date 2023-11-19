import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { userType } from "../context/useContext";
import {
  AntDesign,
  Entypo,
  Feather,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { IAddressProps } from "../types/dataType";
import { useSelector } from "react-redux";
import { RootState } from "../store";
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
  const [selectedAddress, setSelectedAddress] = useState<any>("");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [options, setOptions] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [addresses, setAddresses] = useState<IAddressProps[]>([]);
  const { setUserId, userId } = useContext(userType);
  
  const cart = useSelector((state: RootState) => state.cart.cart);
  
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((prev, current) => current + prev, 0);

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
                    <View>
                      {selectedAddress &&
                        selectedAddress._id === address?._id && (
                          <Pressable
                            onPress={() => setCurrentStep(1)}
                            style={styles.currentStep}
                          >
                            <Text
                              style={{ textAlign: "center", color: "white" }}
                            >
                              Deliver to this address
                            </Text>
                          </Pressable>
                        )}
                    </View>
                  </View>
                </Pressable>
              ))}
            </Pressable>
          </View>
        )}
      </View>
      {currentStep === 1 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Choose your delivery options.
          </Text>
          <View style={styles.entypoView}>
            {options ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => setOptions(!false)}
                name="circle"
                size={20}
                color="gray"
              />
            )}

            <Text style={{ flex: 1 }}>
              <Text style={{ color: "green", fontWeight: "bold" }}>
                Tomorrow.
              </Text>
              -FREE Delivery with your Prime Membership.
            </Text>
          </View>
          <Pressable
            onPress={() => setCurrentStep(2)}
            style={styles.continueText}
          >
            <Text>Continue</Text>
          </Pressable>
        </View>
      )}
      {currentStep === 2 && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Select Your Payment Method...
          </Text>
          <View style={styles.payment}>
            {paymentMethod === "cash" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => setPaymentMethod("cash")}
                name="circle"
                size={20}
                color="gray"
              />
            )}
            <Text>Cash on Delivery...</Text>
          </View>

          <View style={styles.payment}>
            {paymentMethod === "card" ? (
              <FontAwesome5 name="dot-circle" size={20} color="#008397" />
            ) : (
              <Entypo
                onPress={() => setPaymentMethod("card")}
                name="circle"
                size={20}
                color="gray"
              />
            )}
            <Text>Pay Using your Card</Text>
          </View>
            <Pressable
              onPress={() => setCurrentStep(2)}
              style={styles.continueText}
            >
              <Text>Continue</Text>
          </Pressable>
        </View>
      )}

      {currentStep === 3 && paymentMethod === "cash" && (
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Order Now
          </Text>
          <View style={styles.percent}>
            <View>
              <Text style={{fontSize: 17, fontWeight: "bold" }}>
                Save 5% and never run out
             </Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
          <View style={styles.addView}>
            <Text> Shipping to {selectedAddress?.name}</Text>
            <View style={styles.itemStyle}>
              <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>Items</Text>
              <Text style={{ color: "gray", fontSize: 16 }}>{total}</Text>
            </View>
          </View>
        </View>
      )}
    
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
  currentStep: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#008397",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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
  continueText: {
    backgroundColor: "#FFC72C",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  entypoView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 8,
    gap: 7,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 12,
  },
  payment: {
    backgroundColor: "white",
    padding: 8,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginTop: 12,
  },
  percent: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent:"space-between",
    padding: 8,
    gap: 8,
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 10
  },
  addView: {
    padding: 8,
    backgroundColor: "white",
    borderColor: "#D0D0D0",
    borderWidth: 1,
    marginTop: 10
  },
  itemStyle:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },

});
