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
  Dimensions,
  ActivityIndicator, // <- Tambahin ini
} from "react-native";
import colors from "../colors"; 
import { StatusBar } from "expo-status-bar";
import api from '../api/index.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        navigation.replace("Main");
      }
    };
    checkLogin();
  }, []);

  const [nis, setNis] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const nisLabelAnim = useState(new Animated.Value(0))[0];
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

  const handleLogin = async () => {
    if (!nis || !password) {
      Alert.alert("Error", "NIS dan Password tidak boleh kosong");
      return;
    }

    try {
      setIsLoading(true); 

      const response = await api.post('/app/login', { nis, password });

      const token = response.data.token;
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(user));

      setIsLoading(false);
      navigation.replace("Main");
    } catch (error) {
      console.log(error.response?.data || error.message);
      Alert.alert("Login Gagal", error.response?.data?.message || "Cek NIS/Password");
      setIsLoading(false); 
    }
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
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
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
            <Animated.Text style={[styles.label, getLabelStyle(nisLabelAnim)]}>
              NIS
            </Animated.Text>
            <TextInput
              style={styles.input}
              value={nis}
              onChangeText={setNis}
              keyboardType="numeric"
              autoCapitalize="none"
              onFocus={() => handleFocus(nisLabelAnim)}
              onBlur={() => handleBlur(nisLabelAnim, nis)}
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

          <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotText}>Lupa Password?</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};


const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.primary,
    minHeight: height,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 30,
    minHeight: '100%', 
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
