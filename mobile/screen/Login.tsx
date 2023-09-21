import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState,useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const registerNavigate = () => {

  // }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image 
                // source={{
                //     uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                // }}
                style={styles.img}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={styles.login}>
            <Text style={styles.loginText}>
                Login to your account
            </Text>
        </View>
        <View style={{ marginTop: 70 }}>
          <View
            style={styles.inputContainer}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              // value={email}
              // onChangeText={(text) => setEmail(text)}
              style={styles.emailInput}
              placeholder="enter your Email"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View
            style={styles.passwordInput}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />

            <TextInput
              // value={password}
              // onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.passwordTextInput}
              placeholder="enter your Password"
            />
          </View>
        </View>

        <View
          style={styles.loginView}
        >
          <Text>Keep me logged in</Text>

          <Text style={styles.forgotPassword}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 80 }} />

        <Pressable
          // onPress={handleLogin}
          style={styles.loginPressable}
        >
          <Text
            style={styles.loginTextName}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          // onPress={() => navigation.navigate()}
          style={{ marginTop: 15 }}
        >
          <Text style={styles.signUp}>
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "white", 
    alignItems: "center",
    marginTop:50
  },
  img: {
    width:150,
    height:100,
  },
  login: {
    alignItems: "center"
  },
  loginText: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    color: "#041E42"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  inputField: {},
  emailInput: {
    color: "gray",
    marginVertical: 10,
    width: 300,
    // fontSize: email ? 16 : 16,
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  loginPressable: {
    width: 200,
    backgroundColor: "#FEBE10",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
  },
  passwordTextInput: {
    color: "gray",
    marginVertical: 10,
    width: 300,
    // fontSize: password ? 16 : 16,
  }, 
  forgotPassword: { 
    color: "#007FFF", 
    fontWeight: "500"
  },
  loginView: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  loginTextName: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUp:{ 
    textAlign: "center", 
    color: "gray",
    fontSize: 16 }
})