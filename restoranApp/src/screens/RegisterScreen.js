import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userInfo) => {
        const user = userInfo.user;
        console.log("Kayıt başarılı : " + user.email);

        auth.signOut().then(() => {
          navigation.navigate("Login");
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnLogin} onPress={handleRegister}>
          <Text style={styles.btnText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "90%",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
    borderColor: "blue",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  btnSign: {
    borderWidth: 1,
    backgroundColor: "#9DDE8B",
    borderRadius: 5,
    padding: 8,
    borderColor: "#9DDE8B",
    marginHorizontal: 25,
    height: 40,
    width: 130,
    alignItems: "center",
  },
  btnLogin: {
    borderWidth: 1,
    backgroundColor: "#68D2E8",
    borderRadius: 5,
    padding: 8,
    borderColor: "#68D2E8",
    marginHorizontal: 25,
    height: 40,
    width: 130,
    alignItems: "center",
  },
  btnText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
});
