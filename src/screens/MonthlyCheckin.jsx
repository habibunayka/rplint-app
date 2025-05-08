import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MonthlyCheckIn = () => {
  const navigation = useNavigation();

  const monthlyData = Array.from({ length: 30 }, (_, i) => ({
    date: `2024-10-${(i + 1).toString().padStart(2, "0")}`,
    checkIn: "08:00 AM",
    checkOut: "05:00 PM",
  }));

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Kembali</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Riwayat Check-In & Out Bulanan</Text>

      <ScrollView contentContainerStyle={styles.container}>
        {monthlyData.map((item) => (
          <View key={item.date} style={styles.row}>
            <Text style={[styles.cell, { color: "#333" }]}>{item.date}</Text>
            <Text style={[styles.cell, { color: "#0077b6" }]}>{item.checkIn}</Text>
            <Text style={[styles.cell, { color: "#d62828" }]}>{item.checkOut}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default MonthlyCheckIn;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f1f3f6",
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  backButton: {
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "#0077b6",
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
    color: "#222",
  },
  container: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginBottom: 8,
    padding: 14,
    borderRadius: 10,
    elevation: 2,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
});
