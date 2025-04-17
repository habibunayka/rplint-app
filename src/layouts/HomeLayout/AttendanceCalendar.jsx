import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../../colors.js";

const checkInOutData = [
    { date: "2024-10-15", checkIn: "08:00 AM", checkOut: "05:00 PM" },
    { date: "2024-10-16", checkIn: "08:10 AM", checkOut: "05:05 PM" },
    { date: "2024-10-17", checkIn: "08:05 AM", checkOut: "05:02 PM" },
    { date: "2024-10-18", checkIn: "08:00 AM", checkOut: "05:00 PM" },
    { date: "2024-10-19", checkIn: "08:02 AM", checkOut: "05:01 PM" },
];

const AttendanceHistory = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Riwayat Check-In & Check-Out</Text>
            <FlatList   
                data={checkInOutData}
                keyExtractor={(item) => item.date}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.date}>{item.date}</Text>
                        <View style={styles.checkInOutContainer}>
                            <Text style={styles.checkIn}>{item.checkIn}</Text>
                            <Text style={styles.checkOut}>{item.checkOut}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default AttendanceHistory;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white",
        elevation: 3,
        marginTop: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    date: {
        fontSize: 16,
        fontWeight: "bold",
        flex: 1,
    },
    checkInOutContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
    },
    checkIn: {
        color: colors.primary,
        fontWeight: "bold",
    },
    checkOut: {
        color: "red",
        fontWeight: "bold",
    },
});
