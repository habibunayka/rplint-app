import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Easing,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../colors.js";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const checkInOutData = [
  { date: "2024-10-15", checkIn: "08:00 AM", checkOut: "05:00 PM" },
  { date: "2024-10-16", checkIn: "08:10 AM", checkOut: "05:05 PM" },
  { date: "2024-10-17", checkIn: "08:05 AM", checkOut: "05:02 PM" },
  { date: "2024-10-18", checkIn: "08:00 AM", checkOut: "05:00 PM" },
  { date: "2024-10-19", checkIn: "08:02 AM", checkOut: "05:01 PM" },
];

const mataPelajaranData = [
  { subject: "Matematika", teacher: "Pak Budi", time: "08:00 - 09:30" },
  { subject: "Bahasa Indonesia", teacher: "Bu Sari", time: "09:45 - 11:15" },
  { subject: "Fisika", teacher: "Pak Joko", time: "11:30 - 13:00" },
  { subject: "Sejarah", teacher: "Bu Lina", time: "13:15 - 14:45" },
  { subject: "Biologi", teacher: "Pak Andre", time: "15:00 - 16:30" },
];

const AttendanceHistory = () => {
  const [selectedTab, setSelectedTab] = useState("checkin");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(15)).current; // reduced distance for better feel
  const scaleCheckIn = useRef(new Animated.Value(1)).current;
  const scalePelajaran = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200, // shorter duration
        easing: Easing.linear, // simpler easing for performance
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 0,
        duration: 200, // shorter duration
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  }, [selectedTab]);

  const handleTabPress = (tabName, scaleRef) => {
    Animated.sequence([
      Animated.timing(scaleRef, {
        toValue: 0.97, // less shrinking for faster feel
        duration: 70,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(scaleRef, {
        toValue: 1,
        duration: 70,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => {
      fadeAnim.setValue(0);
      translateX.setValue(15);
      setSelectedTab(tabName);
    });
  };

  const renderCheckInOutTable = () => (
    <View style={styles.tableContainer}>
      <Text style={styles.tableTitle}>Check-In & Check-Out</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={[styles.header, styles.firstColumn]}>Tanggal</Text>
          <Text style={styles.header}>Check-In</Text>
          <Text style={[styles.header, styles.lastColumn]}>Check-Out</Text>
        </View>
        {checkInOutData.map((item) => (
          <View key={item.date} style={styles.row}>
            <Text style={[styles.date, styles.firstColumn]}>{item.date}</Text>
            <Text style={styles.checkIn}>{item.checkIn}</Text>
            <Text style={[styles.checkOut, styles.lastColumn]}>{item.checkOut}</Text>
          </View>
        ))}
      </View>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("MonthlyCheckin")}>
        <View style={styles.detailButton}>
          <Text style={styles.detailButtonText}>Lihat Riwayat Bulanan</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  const renderMataPelajaranTable = () => (
    <View style={styles.tableContainer}>
      <Text style={styles.tableTitle}>Mata Pelajaran</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={[styles.header, styles.firstColumn]}>Mata Pelajaran</Text>
          <Text style={styles.header}>Guru</Text>
          <Text style={[styles.header, styles.lastColumn]}>Waktu</Text>
        </View>
        {mataPelajaranData.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={[styles.date, styles.firstColumn]}>{item.subject}</Text>
            <Text style={styles.checkIn}>{item.teacher}</Text>
            <Text style={[styles.checkOut, styles.lastColumn]}>{item.time}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableWithoutFeedback onPress={() => handleTabPress("checkin", scaleCheckIn)}>
          <Animated.View
            style={[
              styles.tab,
              selectedTab === "checkin" && styles.activeTab,
              { transform: [{ scale: scaleCheckIn }] },
            ]}
          >
            <Text style={[styles.tabText, selectedTab === "checkin" && styles.activeTabText]}>
              Check-In & Out
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => handleTabPress("pelajaran", scalePelajaran)}>
          <Animated.View
            style={[
              styles.tab,
              selectedTab === "pelajaran" && styles.activeTab,
              { transform: [{ scale: scalePelajaran }] },
            ]}
          >
            <Text style={[styles.tabText, selectedTab === "pelajaran" && styles.activeTabText]}>
              Mata Pelajaran
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>

      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateX }],
        }}
      >
        {selectedTab === "checkin"
          ? renderCheckInOutTable()
          : renderMataPelajaranTable()}
      </Animated.View>
    </View>
  );
};

export default AttendanceHistory;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f7fa",
    marginTop: 20,
    borderRadius: 16,
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#e0e0e0",
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#ffffff",
  },
  tabText: {
    fontWeight: "600",
    color: "#666",
  },
  activeTabText: {
    color: colors.primary,
  },
  tableContainer: {
    width: SCREEN_WIDTH - 32,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
    color: colors.primary,
  },
  table: {
    borderRadius: 12,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#e9ecef",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 12,
  },
  header: {
    flex: 1,
    fontWeight: "700",
    fontSize: 15,
    color: "#444",
    textAlign: "center",
    borderRightWidth: 1,
    borderRightColor: "#ccc",
    paddingHorizontal: 10,
  },
  firstColumn: {
    borderLeftWidth: 1,
    borderLeftColor: "#ccc",
  },
  lastColumn: {
    borderRightWidth: 0,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  date: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 10,
  },
  checkIn: {
    flex: 1,
    color: colors.primary,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
    paddingHorizontal: 10,
  },
  checkOut: {
    flex: 1,
    color: "#e63946",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
    paddingHorizontal: 10,
  },
  detailButton: {
    marginTop: 16,
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
  },
  detailButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
