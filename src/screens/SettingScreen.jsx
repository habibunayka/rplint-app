import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const SettingScreen = () => {
  const navigation = useNavigation();

  const settingsSections = [
    {
      title: "Akun",
      data: [
        {
          icon: "person-circle-outline",
          label: "Profil & Akun",
          onPress: () => navigation.navigate("AccountSettings"),
        },
      ],
    },
    {
      title: "Umum",
      data: [
        {
          icon: "information-circle-outline",
          label: "Tentang Aplikasi",
          onPress: () => navigation.navigate("AboutApp"),
        },
      ],
    },
  ];

  return (
    <LinearGradient colors={["#E3F2FD", "#FFFFFF"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.header}>Pengaturan</Text>
        <ScrollView>
          {settingsSections.map((section, idx) => (
            <View key={idx} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={item.onPress}
                  style={styles.itemContainer}
                  activeOpacity={0.7} // Provides feedback on press
                >
                  <Ionicons name={item.icon} size={24} color="#333" />
                  <Text style={styles.itemLabel}>{item.label}</Text>
                  <Ionicons name="chevron-forward" size={20} color="#999" />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#666",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 5,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2, // Adds shadow on Android
    shadowColor: "#000", // Adds shadow on iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  itemLabel: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
  },
});

export default SettingScreen;
