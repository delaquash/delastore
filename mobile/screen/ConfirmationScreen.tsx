import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

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
  return (
    <ScrollView style={{ marginTop: 55 }}>
      <View style={{ flex: 1 }}>
        <View>
            {steps.map((step, index)=>(
              <View>
                {index > 0 && (
                  <View style={{ flex: 1,
                    height: 2,
                    backgroundColor: "green", }} />

                )}
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default ConfirmationScreen

const styles = StyleSheet.create({
  stepView :{
    flex: 1,
    height: 2,
    backgroundColor: "green",
  }
})