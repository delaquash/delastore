import React from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screen/Login';
import Register from '../screen/Register';
import Home from '../screen/Home';


export type ScreenStackParamList = {
    Login: undefined
    Register: undefined
    Home: undefined
}

const Stack = createNativeStackNavigator<ScreenStackParamList>()

const StackNavigator = () => {
  // const navigation = useNavigation()
  // const homeNavigation = navigation.navigate()
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // initialRouteName="Home"
      > 
          
          <Stack.Screen name='Login' component={Login}  options={{ headerShown : false }} />
          <Stack.Screen name='Register' component={Register} options={{ headerShown : false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown : false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator;