import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Animated,
  Image,
  ScrollView,
} from "react-native";
import colors from "../colors"; 
import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLabelAnim = useState(new Animated.Value(0))[0];
  const passwordLabelAnim = useState(new Animated.Value(0))[0];

  const handleFocus = (labelAnim) => {
    Animated.timing(labelAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = (labelAnim, value) => {
    if (value === "") {
      Animated.timing(labelAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Email dan Password tidak boleh kosong");
      return;
    }
    navigation.replace("Main");
  };

  const getLabelStyle = (labelAnim) => ({
    top: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [15, -10],
    }),
    fontSize: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 14],
    }),
    color: labelAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ["#888", colors.primary],
    }),
  });


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.width}>
      <KeyboardAvoidingView
        style={styles.main}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StatusBar style="light" />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          style={styles.width}
        >
          <Image
            source={require("../../assets/icon.png")} 
            style={styles.logo}
          />
          <Text style={styles.title}>Selamat Datang!</Text>
          <Text style={styles.subtitle}>Silakan login ke akun anda</Text>

          <View style={styles.inputContainer}>
            <Animated.Text style={[styles.label, getLabelStyle(emailLabelAnim)]}>
              Email
            </Animated.Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              onFocus={() => handleFocus(emailLabelAnim)}
              onBlur={() => handleBlur(emailLabelAnim, email)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Animated.Text style={[styles.label, getLabelStyle(passwordLabelAnim)]}>
              Password
            </Animated.Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              onFocus={() => handleFocus(passwordLabelAnim)}
              onBlur={() => handleBlur(passwordLabelAnim, password)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotText}>Lupa Password?</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  logo: {
    width: '100%',
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    marginBottom: 50,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
    position: "relative",
  },
  label: {
    position: "absolute",
    left: 15,
    backgroundColor: "white",
    paddingHorizontal: 5,
    zIndex: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  input: {
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    borderColor: "#ddd",
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPassword: {
    marginTop: 20,
  },
  forgotText: {
    color: "white",
    fontSize: 14,
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  width: {
    width: '100%'
  }
});

export default LoginScreen;
