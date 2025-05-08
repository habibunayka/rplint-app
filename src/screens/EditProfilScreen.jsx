// src/screens/EditProfilScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditProfilScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Halaman Edit Profil</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});

export default EditProfilScreen;
