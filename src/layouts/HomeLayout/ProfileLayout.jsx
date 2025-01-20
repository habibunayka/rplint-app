// src/layouts/ProfileLayout.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ProfileLayout = ({}) => {
    return (
        <View style={styles.main}>
            <View style={styles.profileContainer}>
                <View style={styles.circle}></View>
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Habibunayka Miftah Al-Rizqi</Text>
                    <Text style={styles.class}>XI RPL 2</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        shadowColor: "white",
        maxHeight: 120,
        marginTop: 30,
        position: 'relative',
        zIndex: -2
    },
    circle: {
        borderRadius: 50,
        height: 75,
        width: 75,
        backgroundColor: "#f0f0f0",
        position: 'relative',
        zIndex: -1,
    },
    profileInfo: {
        marginLeft: 20,
    },
    name: {
        fontWeight: "900",
        fontSize: 19,
        color: "white",
        maxWidth: 280,
        flexWrap: "wrap",
    },
    class: {
        fontWeight: "normal",
        fontSize: 16,
        color: "white",
    },
});

export default ProfileLayout;
