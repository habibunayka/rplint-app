import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";

const SettingScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const settingsOptions = [
    "Pengaturan Akun & Profil",
    "Tentang Aplikasi"
  ];

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.headerText, isDarkMode ? styles.darkText : styles.lightText]}>Pengaturan</Text>
      
      <View style={styles.settingsList}>
        {settingsOptions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.settingItem}>
            <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>Mode Gelap</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  settingsList: {
    borderRadius: 10,
    overflow: "hidden",
    width: "100%",
  },
  settingItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#f9f9f9",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  text: {
    fontSize: 18,
  },
  lightContainer: {
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  lightText: {
    color: "#000",
  },
  darkText: {
    color: "#fff",
  },
});

export default SettingScreen;
