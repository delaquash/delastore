import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { userType } from '../context/useContext';

interface StepsData {
  title: string;
  content: string
}

const ConfirmationScreen = () => {
  const steps: StepsData[] = [
    {title: "Address", content: "Address Form"},
    {title: "Delivery", content: "Delivery Options"},
    {title: "Payment", content: "Payment Details"},
    {title: "Place Order", content: "Order Summary"}
  ]
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [addresses, setAddresses] = useState([])
  const {setUserId, userId} = useContext(userType)

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
        const res = await axios.get(`/address/${userId}`)
       const { addresses } = res.data
       setAddresses(addresses)
    } catch (error) {
        console.log("error", error);
    }
  }
  return (
    <ScrollView style={{ marginTop: 55 }}>
      <View style={{ flex: 1, paddingHorizontal:20, paddingTop: 40 }}>
        <View style={styles.stepView}>
            {steps.map((step, index)=>(
              <View style={{ justifyContent: "center", alignItems: "center"}}>
                {index > 0 && (
                  <View style={[{ flex: 1, height: 2, backgroundColor: "green"},
                    index <= currentStep && { backgroundColor: "green"},
                    ]} 
                  />
                )}
                <View style={styles.indexView}>
                  {index < currentStep ? (
                    <Text style={styles.indexText}>
                      &#1003
                    </Text>
                  ):(
                    <Text style={styles.indexText}>
                      {index + 1}
                    </Text>
                  )}
                </View>
                    <Text style={{ textAlign: "center", marginTop:80}}>{step.title}</Text>
              </View>
            ))}
        </View>
            {currentStep === 0 && (
              <View style={{ marginHorizontal: 20 }}>
                <Text>Select Delivery Address</Text>
              </View>
            )}
      </View>
    </ScrollView>
  )
}

export default ConfirmationScreen

const styles = StyleSheet.create({
  stepView :{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20

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
    fontWeight: "bold"
  }
})