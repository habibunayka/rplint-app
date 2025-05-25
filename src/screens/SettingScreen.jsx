import React from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

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
          onPress: () => alert("Aplikasi versi 1.0"),
        },
      ],
    },
  ];

  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#666",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemLabel: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
  },
});

export default SettingScreen;
