import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screen/Login';
import Register from '../screen/Register';

export type ScreenStackParamList = {
    Login: undefined
    Register: undefined
}

const Stack = createNativeStackNavigator<ScreenStackParamList>()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Register' component={Register} options={{ headerShown : false }} />
          <Stack.Screen name='Login' component={Login}  options={{ headerShown : false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;