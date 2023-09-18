import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Pressable,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { Ionicons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import axios from "axios";
import GmailSignIn from "../component/Button/GmailSignIn";

const RegisterScreen = () => {
  const navigation = useNavigation()
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")


  const handleRegister =async () => {
    try {
      const user = {
      name: name,
      email: email,
      password: password
    }
    // send post request to server
      await axios.post("http://localhost:5000/register", user,{
        headers:{'Content-Type':'application/json'}
      }).then((response: any)=>{
        console.log(response)
        Alert.alert("You have been signed in successfully...")
        setName("")
        setEmail("")
        setPassword("")
      })
      .catch((error: any)=> {
        console.log("Registration failed", error)
        Alert.alert("Registration was not successful..")
      })
    } catch (error) {
      console.log(error);
    }
  
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Image 
                source={{
                    uri: "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
                }}
                style={styles.img}
            />
        </View>
        <KeyboardAvoidingView>
        <View style={styles.register}>
          <Text style={styles.registerText}>
            Register to your Account
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.viewContainer}>
            <Ionicons
              name="ios-person"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
            //   value={name}
            //   onChangeText={(text) => setName(text)}
              style={styles.textInput}
              placeholder="enter your name"
            />
          </View>
          </View>

          <View
            style={styles.registerInput}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
            //   value={email}
            //   onChangeText={(text) => setEmail(text)}
              style={styles.emailBox}
              placeholder="enter your Email"
            />
          </View>

        <View>
          <View
            style={styles.viewPassword}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />

            <TextInput
            //   value={password}
            //   onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.passwordInput}
              placeholder="enter your Password"
            />
          </View>
        </View>

        <View style={styles.loggedInView}>
          <Text>Keep me logged in</Text>

          <Text style={styles.forgotPassword}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 80 }} />

        <Pressable
          // onPress={handleRegister}
          style={styles.pressableRegister}
        >
          <Text style={styles.resgitrationText}>
            Register
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 15 }}
        >
          <Text style={styles.signIn}>
            Already have an account? Sign In
          </Text>
        </Pressable>
            {/* <GmailSignIn /> */}
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
}
export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 50,
    },
    img: {
        width: 150,
        height: 100
    },
    register: {
         alignItems: "center" 
    },
    registerText: {
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 12,
        color: "#041E42",
      },
    resgitrationText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
      },
    inputContainer: { 
        marginTop: 70 
    },
    viewContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#D0D0D0",
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 30,
      },
    textInput: {
        color: "gray",
        marginVertical: 10,
        width: 300,
        // fontSize: name ? 16 : 16,
      },
      registerInput: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#D0D0D0",
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 30,
      },
    emailBox: {
        color: "gray",
        marginVertical: 10,
        width: 300,
        // fontSize: password ? 16 : 16,
      },
    viewPassword: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#D0D0D0",
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 30,
      },
    passwordInput: {
        color: "gray",
        marginVertical: 10,
        width: 300,
        // fontSize: email ? 16 : 16,
      },
    loggedInView: {
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    forgotPassword: { 
        color: "#007FFF", 
        fontWeight: "500" 
    },
    pressableRegister: {
        width: 200,
        backgroundColor: "#FEBE10",
        borderRadius: 6,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
      },
      signIn: { 
        textAlign: "center", 
        color: "gray", 
        fontSize: 16 
    },
  
})