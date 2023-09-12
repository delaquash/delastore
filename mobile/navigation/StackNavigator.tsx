import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';

export type ScreenStackParamList = {
    Login: undefined
    Register: undefined

}
const Stack = createNativeStackNavigator<ScreenStackParamList>()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen 
            component={RegisterScreen} 
            name='Register'
            options={{ headerShown : false }}
        />
         <Stack.Screen 
            component={LoginScreen} 
            name='Login'
            options={{ headerShown : false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator