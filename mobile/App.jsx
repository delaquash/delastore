import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import StackNavigator from "./navigation/StackNavigator";
import { store } from "./store";
import {ModalPortal} from 'react-native-modals';
import { UserContext } from "./context/useContext";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <UserContext>
          <StackNavigator />
          <ModalPortal />
        </UserContext>
      </Provider>
    </>
  );
}


