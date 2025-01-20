import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../colors.js';

const AttendanceTime = () => {
    const checkInTime = "07:00 AM";
    const checkOutTime = "-";
    const currentDate = new Date(); 
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        locale: 'id-ID'
    };
    const formattedDate = currentDate.toLocaleDateString('id-ID', options);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.dateText}>{formattedDate}</Text>
                <View style={styles.timeContainer}>
                    <View style={styles.checkInContainer}>
                        <View style={styles.labelContainer}>
                            <Icon name="clock-time-seven-outline" size={24} color={colors.primary} style={styles.icon} />
                            <Text style={styles.label}>Check In</Text>
                        </View>
                        <Text style={styles.time}>{checkInTime}</Text>
                    </View>
                    <View style={styles.checkOutContainer}>
                        <View style={styles.labelContainer2}>
                            <Icon name="clock-time-three-outline" size={24} color={colors.primary} style={styles.icon} />
                            <Text style={styles.label}>Check Out</Text>
                        </View>
                        <Text style={styles.time}>{checkOutTime}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default AttendanceTime;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginTop: 20,
    },
    card: {
        width: "100%",
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        elevation: 2,
    },
    dateText: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    timeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    checkInContainer: {
        alignItems: "flex-start",
    },
    checkOutContainer: {
        alignItems: "flex-end",
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    labelContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 5,
    },
    label: {
        fontSize: 14,
        color: colors.text,
    },
    time: {
        fontSize: 21,
        fontWeight: "bold",
        color: colors.primary,
        marginTop: 5,
    },
});
