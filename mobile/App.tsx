import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import StackNavigator from "./navigation/StackNavigator";
import { store } from "./store";
// import {ModalPortal} from 'react-native-modals';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
        {/* <ModalPortal /> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
