import React,{ useEffect} from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const GmailSignIn = () => {
    useEffect(() => {
      GoogleSignin.configure()
    }, [])
    
    const gmailRegister = async() => {
        // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
    }
  return (
    <Pressable
        //   onPress={gmailRegister}
          style={styles.gmailRegister}
        >
          <Text style={styles.resgitrationText}>
            Sign in with Gmail
          </Text>
        </Pressable>    
  )
}

export default GmailSignIn

const styles = StyleSheet.create({
    gmailRegister: {
        width: 200,
        top:20,
        backgroundColor: "#000",
        borderRadius: 6,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
      },
      resgitrationText: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
      }
})