import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import color from "../colors";
import { LinearGradient } from "expo-linear-gradient";

const schedule = [
  {
    day: "Senin",
    general: [
      { subject: "Matematika", time: "07:00 - 08:00" },
      { subject: "Bahasa Inggris", time: "08:00 - 09:00" },
    ],
    major: [
      { subject: "Pemrograman Dasar", time: "09:00 - 10:00" },
      { subject: "Jaringan Komputer", time: "10:00 - 11:00" },
    ],
  },
  {
    day: "Selasa",
    general: [
      { subject: "Fisika", time: "07:00 - 08:00" },
      { subject: "Kimia", time: "08:00 - 09:00" },
    ],
    major: [
      { subject: "Basis Data", time: "09:00 - 10:00" },
      { subject: "Sistem Operasi", time: "10:00 - 11:00" },
    ],
  },
];

const SubjectScreen = () => {
  const [selectedTab, setSelectedTab] = useState("general");

  const renderRow = (item) => {
    const data = item[selectedTab];
    return data.map((row, i) => (
      <View key={i} style={[styles.row, i % 2 === 0 ? styles.evenRow : null]}>
        <Text style={[styles.cell, styles.subjectCell, { flex: 1 }]}>
          {row.subject}
        </Text>
        <Text style={[styles.cell, styles.timeCell, { flex: 1 }]}>
          {row.time}
        </Text>
      </View>
    ));
  };

  return (
    <LinearGradient colors={["#f0f0f0", "#f0f0f0"]} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Jadwal Pelajaran Bulanan</Text>

        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedTab === "general" && styles.activeButton,
            ]}
            onPress={() => setSelectedTab("general")}
          >
            <Text
              style={[
                styles.toggleText,
                selectedTab === "general" && styles.activeText,
              ]}
            >
              Umum
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              selectedTab === "major" && styles.activeButton,
            ]}
            onPress={() => setSelectedTab("major")}
          >
            <Text
              style={[
                styles.toggleText,
                selectedTab === "major" && styles.activeText,
              ]}
            >
              Produktif
            </Text>
          </TouchableOpacity>
        </View>

        {schedule.map((item, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{item.day}</Text>
            <View style={styles.table}>
              <View style={[styles.row, styles.headerRow]}>
                <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>
                  Pelajaran
                </Text>
                <Text style={[styles.cell, styles.headerCell, { flex: 0.3 }]}>
                  Waktu
                </Text>
              </View>
              {renderRow(item)}
            </View>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: color.primary,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.primary,
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
  activeButton: {
    backgroundColor: color.primary,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "600",
    color: color.primary,
  },
  activeText: {
    color: "#fff",
  },
  dayContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  table: {
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: 12,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  evenRow: {
    backgroundColor: "#e8f4ff",
  },
  cell: {
    fontSize: 16,
  },
  subjectCell: {
    fontWeight: "600",
  },
  timeCell: {
    textAlign: "right",
  },
  headerRow: {
    backgroundColor: color.primary,
  },
  headerCell: {
    color: "#fff",
    fontWeight: "700",
  },
});

export default SubjectScreen;
