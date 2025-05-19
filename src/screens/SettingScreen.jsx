import React, { useState } from "react";
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

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
        {
          icon: "moon-outline",
          label: "Mode Gelap",
          isSwitch: true,
        },
      ],
    },
  ];

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.header, isDarkMode && styles.darkText]}>
        Pengaturan
      </Text>

      <ScrollView>
        {settingsSections.map((section, idx) => (
          <View key={idx} style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                isDarkMode && styles.darkTextSecondary,
              ]}
            >
              {section.title}
            </Text>
            {section.data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={item.onPress}
                style={[
                  styles.itemContainer,
                  isDarkMode && styles.darkItemContainer,
                ]}
                activeOpacity={item.isSwitch ? 1 : 0.7}
              >
                <Ionicons
                  name={item.icon}
                  size={24}
                  color={isDarkMode ? "#fff" : "#333"}
                />
                <Text
                  style={[styles.itemLabel, isDarkMode && styles.darkText]}
                >
                  {item.label}
                </Text>
                {item.isSwitch ? (
                  <Switch
                    value={isDarkMode}
                    onValueChange={toggleTheme}
                    thumbColor={isDarkMode ? "#fff" : "#ccc"}
                  />
                ) : (
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={isDarkMode ? "#aaa" : "#999"}
                  />
                )}
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
  darkContainer: {
    backgroundColor: "#1c1c1e",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  darkText: {
    color: "#fff",
  },
  darkTextSecondary: {
    color: "#ccc",
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
  darkItemContainer: {
    backgroundColor: "#2c2c2e",
  },
  itemLabel: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
  },
});

export default SettingScreen;
