import "react-native-gesture-handler";

// import { ModalPortal } from 'react-native-modals';
import { Provider } from "react-redux";
import { UserContext } from "./context/useContext";
import StackNavigator from "./navigation/StackNavigator";
import { store } from "./store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <UserContext>
          <StackNavigator />
          {/* <ModalPortal /> */}
        </UserContext>
      </Provider>
    </>
  );
}


