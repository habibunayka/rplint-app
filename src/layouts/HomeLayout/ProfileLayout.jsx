// src/layouts/ProfileLayout.js
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const ProfileLayout = () => {
  const navigation = useNavigation();

  const handleImagePress = () => {
    navigation.navigate("EditProfilScreen");
  };

  return (
    <LinearGradient colors={['#0D92F4', '#1E90FF']} style={styles.gradient}>
    <View style={styles.main}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require("../../../assets/coba_foto.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Muhammad Istiqlal Fajar S.</Text>
          <Text style={styles.class}>XI RPL 2</Text>
        </View>
      </View>
    </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: "white",
    maxHeight: 120,
    marginTop: 30,

  },
  profileImage: {
    borderRadius: 50,
    height: 75,
    width: 75,
    backgroundColor: "#f0f0f0",
  },
  profileInfo: {
    marginLeft: 20,

  },
  name: {
    fontWeight: "900",
    fontSize: 19,
    color: "white",
    maxWidth: 280,
    flexWrap: "wrap",
    maxWidth: 208
  },
  class: {
    fontWeight: "normal",
    fontSize: 16,
    color: "white",
  },
});

export default ProfileLayout;
