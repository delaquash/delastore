import React from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import Login from '../screen/Login';
import Register from '../screen/Register';
import Home from '../screen/Home';
import { Entypo , AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cart from '../screen/Cart';
import Profile from '../screen/Profile';
import ProductInfo from '../screen/ProductInfo';
import { createStackNavigator } from '@react-navigation/stack';
import AddAddressScreen from '../screen/AddAddressScreen';
import AddressScreen from '../screen/AddScreen';
import ConfirmationScreen from '../screen/ConfirmationScreen';


export type ScreenStackParamList = {
    Login: undefined
    Register: undefined
    Main: undefined
    Address: undefined
    Add: undefined
    Confirm: undefined
    Info: { carouselImage: string[], titles: string, prices: number}
}

// type Props = NativeStackScreenProps<ScreenStackParamList, 'Info'>;
// const Stack = createStackNavigator<ScreenStackParamList>();

const Stack = createNativeStackNavigator<ScreenStackParamList>()
const Tab = createBottomTabNavigator()

const StackNavigator = () => {
  const BottomTabs =()=> {
    return (
      <Tab.Navigator>
        <Tab.Screen 
            name='Home'
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarLabelStyle: { color: "#008E97"},
              headerShown: false,
              tabBarIcon: ({ focused })=> focused ? (
                <Entypo name='home' size={24} color="black" />
              ) : (
                <AntDesign name='home' size={24} color="black" />
              )
            }}
        />
        <Tab.Screen 
            name='Profile'
            component={Profile}
            options={{
              tabBarLabel: "Profile",
              tabBarLabelStyle: { color: "#008E97"},
              headerShown: false,
              tabBarIcon: ({ focused })=> focused ? (
                <Ionicons name="person" size={24} color="#008E97" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              )
            }}
        />
        <Tab.Screen 
            name='Cart'
            component={Cart}
            options={{
              tabBarLabel: "Cart",
              tabBarLabelStyle: { color: "#008E97"},
              headerShown: false,
              tabBarIcon: ({ focused })=> focused ? (
                <AntDesign name="shoppingcart" size={24} color="#008E97" />
              ) : (
                <AntDesign name="shoppingcart" size={24} color="black" />
              )
            }}
        />
      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
      // initialRouteName="Home"
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={ProductInfo}
          options={{ headerShown: false }}
          initialParams={{}}
        />
        <Stack.Screen 
          name="Address"
          component={AddAddressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Add"
          component={AddressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Confirm"
          component={ConfirmationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;