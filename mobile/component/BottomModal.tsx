// import { Entypo } from "@expo/vector-icons";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomSheet from "@gorhom/bottom-sheet";
export interface IAddressProps {
  name: string;
  houseNo: number;
  landmark: string;
  street: string;
}


const BottomModal = () => {
  const navigation = useNavigation()
  const [addresses, setAddresses] = useState<IAddressProps[]>([]);
  const [isOpen, setisOpen] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAddress, setSelectedAdress] = useState("");
  // ref
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = ['50%'];

  // callbacks
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.close();
  };

  return (
    <GestureHandlerRootView>
      
        <BottomSheet
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          // onChange={handleSheetChanges}
          backgroundStyle={{ borderRadius: 50 }}
        >
          <View
          // style={{ marginBottom: 8 }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>
              Choose your Location
            </Text>

            <Text style={{ marginTop: 5, fontSize: 16, color: "gray" }}>
              Select a delivery location to see product availabilty and delivery
              options
            </Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* already added addresses  */}
            {addresses?.map((item, index) => (
              <Pressable
                onPress={() => setSelectedAdress(item)}
                style={{
                  width: 140,
                  height: 140,
                  borderColor: "#D0D0D0",
                  borderWidth: 1,
                  padding: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 3,
                  marginRight: 15,
                  marginTop: 10,
                  backgroundColor: selectedAddress === item ? "#FBCEB1" : "white"
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                >
                  <Text style={{ fontSize: 13, fontWeight: "bold" }}>
                    {item?.name}
                  </Text>
                  <Entypo name="location-pin" size={24} color="red" />
                </View>

                <Text
                  numberOfLines={1}
                  style={{ width: 130, fontSize: 13, textAlign: "center" }}
                >
                  {item?.houseNo},{item?.landmark}
                </Text>

                <Text
                  numberOfLines={1}
                  style={{ width: 130, fontSize: 13, textAlign: "center" }}
                >
                  {item?.street}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{ width: 130, fontSize: 13, textAlign: "center" }}
                >
                  India, Bangalore
                </Text>
              </Pressable>
            ))}

             <Pressable
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("Address");
              }}
              style={{
                width: 140,
                height: 140,
                borderColor: "#D0D0D0",
                marginTop: 10,
                borderWidth: 1,
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#0066b2",
                  fontWeight: "500",
                }}
              >
                Add an Address or pick-up point
              </Text>
            </Pressable>
             </ScrollView>

           <View style={{ flexDirection: "column", gap: 7, marginBottom: 30 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Entypo name="location-pin" size={22} color="#0066b2" />
              <Text style={{ color: "#0066b2", fontWeight: "400" }}>
                Enter an Indian pincode
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Ionicons name="locate-sharp" size={22} color="#0066b2" />
              <Text style={{ color: "#0066b2", fontWeight: "400" }}>
                Use My Currect location
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <AntDesign name="earth" size={22} color="#0066b2" />

              <Text style={{ color: "#0066b2", fontWeight: "400" }}>
                Deliver outside India
              </Text>
            </View>
          </View>
        </BottomSheet>
   
     </GestureHandlerRootView>
    

  )
};

export default BottomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  }
  // bottomContentContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  //   marginBottom: 8,
  // },
})



