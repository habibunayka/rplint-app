    import { StyleSheet, Text, View } from "react-native";
    import React from "react";
    import colors from '../../colors.js'

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
                        <Text style={[styles.permCount, styles.permissionCount]}>1</Text>
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
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 20, 
            marginLeft: 20,
        },
        card: {
            width: "100%",
            justifyContent: "space-evenly",
            flexDirection: "row",
            backgroundColor: "white",
            padding: 15, 
            borderRadius: 10, 
            elevation: 2, 
            alignItems: "center", 
        },
        present: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        absent: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        permission: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        permCount: {
            paddingVertical: 12, 
            paddingHorizontal: 16,
            fontWeight: "bold",
            fontSize: 15,
            color: "black",
            borderRadius: 8,
        },
        count: {
            paddingVertical: 12, 
            paddingHorizontal: 16,
            fontWeight: "bold",
            fontSize: 15,
            color: "white",
            borderRadius: 8,
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
            backgroundColor: "yellow", 
        },
        presentTitle: {
            color: 'black',
        },
        absentTitle: {
            color: 'black', 
        },
        permissionTitle: {
            color: 'black', 
        },
    });
