import React from 'react';
import { StyleSheet, Text, View, ScrollView,SafeAreaView, Platform, Pressable, TextInput } from 'react-native';
import { AntDesign, Feather, Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";


const Home = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.viewStyle}>
          <Pressable style={styles.pressable}>
              <AntDesign
                    style={{ paddingLeft: 10 }}
                    name="search1"
                    size={22}
                    color="black"
              />
              <TextInput placeholder="Search for your favourite products " />
          </Pressable>
          <Feather name="mic" size={24} color="black" />
        </View>
        <Pressable style={styles.pressableLocation}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Pressable>
              {/* {selectedAddress ? (
                  <Text>
                    Deliver to {selectedAddress?.name} - {selectedAddress?.street}
                  </Text>
                ) : (
                  <Text style={{ fontSize: 13, fontWeight: "500" }}>
                      Add a Address
                  </Text>
                )} */}
              {/* </Pressable> */}

            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </Pressable>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: Platform.OS === "android" ?40 : 0,
    flex: 1,
    backgroundColor: "#fff"
  },
  viewStyle: {
    backgroundColor: "#00CED1",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  pressable: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    height: 38,
    flex: 1,
  },
  pressableLocation: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#AFEEEE",
  }
})