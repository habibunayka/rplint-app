import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import colors from '../../colors.js';

const AttendanceCount = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.present}>
                    <Text style={[styles.count, styles.presentCount]}>50</Text>
                    <Text style={[styles.title, styles.presentTitle]}>Hadir</Text>
                </View>
                <View style={styles.absent}>
                    <Text style={[styles.count, styles.absentCount]}>2</Text>
                    <Text style={[styles.title, styles.absentTitle]}>Tidak Hadir</Text>
                </View>
                <View style={styles.permission}>
                    <Text style={[styles.count, styles.permissionCount]}>1</Text>
                    <Text style={[styles.title, styles.permissionTitle]}>Izin</Text>
                </View>
            </View>
        </View>
    );
};

export default AttendanceCount;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 20,
    },
    card: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        ...Platform.select({
            android: {
                elevation: 6,
            },
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 8,
            }
        }),
    },
    present: {
        alignItems: 'center',
    },
    absent: {
        alignItems: 'center',
    },
    permission: {
        alignItems: 'center',
    },
    count: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontWeight: "bold",
        fontSize: 15,
        borderRadius: 8,
        color: "white",
    },
    title: {
        fontWeight: '600',
        marginTop: 7,
        fontSize: 14,
        color: "black",
    },
    presentCount: {
        backgroundColor: colors.primary,
    },
    absentCount: {
        backgroundColor: "red",
    },
    permissionCount: {
        backgroundColor: "gold",
    },
});
